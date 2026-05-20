from django.db import models
from django.utils.html import format_html
import time

# -----------------------------
# Offer Model
# -----------------------------
class Offer(models.Model):
    CATEGORY_CHOICES = [
        ("dubai_lassi_home", "DUBAI - LASSI HOME SHOP"),
        ("rak_hamrah", "RAK - LEPTIS SHOPPING CENTER AL HAMRAH"),
        ("rak_marjan", "RAK - LEPTIS SUPERMARKET MARJAN"),
        ("alain_spicy", "AL AIN - SPICY VILLAGE AL AIN"),
        ("alain_leptis", "AL AIN - LEPTIS SHOPPING CENTER AL AIN"),
    ]

    title = models.CharField(max_length=255)
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


# -----------------------------
# Offer PDF Model
# -----------------------------
class OfferPDF(models.Model):
    offer = models.ForeignKey(
        Offer, related_name="pdfs", on_delete=models.CASCADE
    )
    pdf_file = models.FileField(upload_to="offers/pdfs/")  # PDF file
    thumbnail = models.ImageField(upload_to="offers/thumbnails/", blank=True, null=True)  # optional preview
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"PDF for {self.offer.title}"

    def preview_pdf(self):
        """
        Optional HTML preview for Django admin
        """
        if self.thumbnail:
            return format_html(
                '<a href="{}" target="_blank">'
                '<img src="{}" style="max-width:120px; max-height:120px;" />'
                '</a>',
                self.pdf_file.url, self.thumbnail.url
            )
        return format_html(
            '<a href="{}" target="_blank">View PDF</a>',
            self.pdf_file.url
        )
    preview_pdf.short_description = "PDF Preview"


# -----------------------------
# Career Application Model
# -----------------------------
def cv_upload_path(instance, filename):
    """
    Store CVs in media/cvs/<timestamp>_<filename>
    """
    return f"cvs/{int(time.time())}_{filename}"


class CareerApplication(models.Model):
    name = models.CharField(max_length=200)
    phone = models.CharField(max_length=50)
    email = models.EmailField()
    message = models.TextField(blank=True)
    cv = models.FileField(upload_to=cv_upload_path)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.email}"


# -----------------------------
# Contact Message Model
# -----------------------------
class ContactMessage(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField()
    subject = models.CharField(max_length=255, blank=True)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.subject or 'No subject'}"  



