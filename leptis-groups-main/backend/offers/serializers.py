from rest_framework import serializers
from .models import CareerApplication, ContactMessage, Offer, OfferPDF


# -------------------------------------------------------------------
# OFFER IMAGE SERIALIZER
# -------------------------------------------------------------------
class OfferPDFSerializer(serializers.ModelSerializer):
    pdf_url = serializers.SerializerMethodField()
    thumbnail_url = serializers.SerializerMethodField()

    class Meta:
        model = OfferPDF
        fields = ["id", "pdf_file", "thumbnail", "pdf_url", "thumbnail_url"]

    def get_pdf_url(self, obj):
        if obj.pdf_file:
            request = self.context.get("request")
            return request.build_absolute_uri(obj.pdf_file.url) if request else obj.pdf_file.url
        return None

    def get_thumbnail_url(self, obj):
        if obj.thumbnail:
            request = self.context.get("request")
            return request.build_absolute_uri(obj.thumbnail.url) if request else obj.thumbnail.url
        return None


class OfferSerializer(serializers.ModelSerializer):
    pdfs = OfferPDFSerializer(many=True, read_only=True)

    class Meta:
        model = Offer
        fields = ["id", "title", "category", "created_at", "pdfs"]


# -------------------------------------------------------------------
# OFFER SERIALIZER
# -------------------------------------------------------------------
class OfferSerializer(serializers.ModelSerializer):
    pdfs = OfferPDFSerializer(many=True, read_only=True)

    class Meta:
        model = Offer
        fields = ["id", "title", "category", "created_at", "pdfs"]

# -------------------------------------------------------------------
# CAREER APPLICATION SERIALIZER
# -------------------------------------------------------------------
class CareerApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = CareerApplication
        fields = ['id', 'name', 'phone', 'email', 'message', 'cv', 'created_at']
        read_only_fields = ['id', 'created_at']

    def validate_cv(self, value):
        """
        Ensure CV is a PDF file and optionally check file size (max 5MB)
        """
        # Check file type
        if hasattr(value, 'content_type') and value.content_type != 'application/pdf' and not value.name.lower().endswith('.pdf'):
            raise serializers.ValidationError("CV must be a PDF file.")
        # Check file size (optional, max 5MB)
        max_size = 5 * 1024 * 1024  # 5MB
        if hasattr(value, 'size') and value.size > max_size:
            raise serializers.ValidationError("CV file too large. Max size is 5MB.")
        return value


# -------------------------------------------------------------------
# CONTACT MESSAGE SERIALIZER
# -------------------------------------------------------------------
class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = ['id', 'name', 'email', 'subject', 'message', 'created_at']
        read_only_fields = ['id', 'created_at']
