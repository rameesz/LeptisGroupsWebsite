from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.decorators import action
from django.core.mail import send_mail
from django.conf import settings

from .models import CareerApplication, ContactMessage, Offer, OfferPDF
from .serializers import (
    CareerApplicationSerializer,
    ContactMessageSerializer,
    OfferSerializer,
    OfferPDFSerializer
)

# -------------------------------------------------------------------
# OFFER VIEWSET (MULTIPLE PDFs + OPTIONAL THUMBNAILS)
# -------------------------------------------------------------------
class OfferViewSet(viewsets.ModelViewSet):
    queryset = Offer.objects.all().order_by("-created_at")
    serializer_class = OfferSerializer
    parser_classes = [MultiPartParser, FormParser]

    def create(self, request, *args, **kwargs):
        serializer = OfferSerializer(data=request.data, context={"request": request})
        serializer.is_valid(raise_exception=True)
        offer = serializer.save()

        pdf_files = request.FILES.getlist("pdfs")
        for pdf in pdf_files:
            OfferPDF.objects.create(offer=offer, pdf_file=pdf)

        return Response({
            "message": "Offer created successfully",
            "offer": OfferSerializer(offer, context={"request": request}).data
        }, status=status.HTTP_201_CREATED)

    def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', False)
        instance = self.get_object()
        serializer = OfferSerializer(
            instance, data=request.data, partial=partial, context={"request": request}
        )
        serializer.is_valid(raise_exception=True)
        offer = serializer.save()

        pdf_files = request.FILES.getlist("pdfs")
        for pdf in pdf_files:
            OfferPDF.objects.create(offer=offer, pdf_file=pdf)

        return Response({
            "message": "Offer updated successfully",
            "offer": OfferSerializer(offer, context={"request": request}).data
        }, status=status.HTTP_200_OK)

    @action(detail=True, methods=["get"])
    def pdfs(self, request, pk=None):
        offer = self.get_object()
        pdf_files = offer.pdfs.all()
        serializer = OfferPDFSerializer(pdf_files, many=True, context={"request": request})
        return Response({"pdfs": serializer.data})

# -------------------------------------------------------------------
# CAREER APPLICATION VIEWSET
# -------------------------------------------------------------------
class CareerApplicationViewSet(viewsets.ModelViewSet):
    queryset = CareerApplication.objects.all().order_by('-created_at')
    serializer_class = CareerApplicationSerializer
    parser_classes = [MultiPartParser, FormParser]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        app = serializer.save()

        # Build CV absolute URL
        cv_url = getattr(app.cv, 'url', None)
        if cv_url:
            try:
                cv_url = request.build_absolute_uri(cv_url)
            except Exception:
                cv_url = "Unable to build CV URL"

        # Send notification email
        subject = f"New Career Application from {app.name}"
        body = f"""
A new career application has been submitted.

Name: {app.name}
Email: {app.email}
Phone: {app.phone}

Message:
{app.message}

CV Link:
{cv_url or "No CV uploaded"}
"""
        recipient = ["leptisgroupsit@gmail.com"]
        try:
            send_mail(subject, body, settings.DEFAULT_FROM_EMAIL, recipient)
        except Exception as e:
            print("Email sending failed:", e)

        return Response({
            "message": "Application submitted successfully",
            "data": serializer.data
        }, status=status.HTTP_201_CREATED)

# -------------------------------------------------------------------
# CONTACT MESSAGE VIEWSET
# -------------------------------------------------------------------
class ContactMessageViewSet(viewsets.ModelViewSet):
    queryset = ContactMessage.objects.all().order_by('-created_at')
    serializer_class = ContactMessageSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        msg = serializer.save()

        # Send notification email
        subject = f"New Contact Message: {msg.subject or 'No Subject'}"
        body = f"""
You have received a new contact form message.

Name: {msg.name}
Email: {msg.email}
Subject: {msg.subject}
Message:
{msg.message}
"""
        recipient = ["leptisgroupsit@gmail.com"]
        try:
            send_mail(subject, body, settings.DEFAULT_FROM_EMAIL, recipient)
        except Exception as e:
            print("Email sending failed:", e)

        return Response({
            "message": "Message sent successfully",
            "data": serializer.data
        }, status=status.HTTP_201_CREATED)
