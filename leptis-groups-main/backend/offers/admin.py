from django.contrib import admin
from django.utils.html import format_html
from django.urls import reverse
from django.utils.safestring import mark_safe
from .models import CareerApplication, ContactMessage, Offer, OfferPDF


# -----------------------------
# Career Application Admin
# -----------------------------
@admin.register(CareerApplication)
class CareerApplicationAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'phone', 'created_at')
    readonly_fields = ('created_at',)


# -----------------------------
# Contact Message Admin
# -----------------------------
@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'subject', 'created_at')
    readonly_fields = ('created_at',)


# -----------------------------
# Offer PDF Inline (multiple PDFs per Offer)
# -----------------------------
class OfferPDFInline(admin.TabularInline):
    model = OfferPDF
    extra = 0
    fields = ("pdf_file", "thumbnail", "preview_pdf")
    readonly_fields = ("preview_pdf",)

    def preview_pdf(self, obj):
        if not obj.pk:
            return "Save the offer first to see PDFs."
        if obj.thumbnail:
            return format_html(
                '<a href="{}" target="_blank">'
                '<img src="{}" style="max-width:120px; max-height:120px;" />'
                '</a>',
                obj.pdf_file.url, obj.thumbnail.url
            )
        return format_html('<a href="{}" target="_blank">View PDF</a>', obj.pdf_file.url)
    preview_pdf.short_description = "PDF Preview"


# -----------------------------
# Offer Admin
# -----------------------------
@admin.register(Offer)
class OfferAdmin(admin.ModelAdmin):
    list_display = ("id", "title", "category", "created_at", "pdf_previews")
    list_filter = ("category",)
    search_fields = ("title",)
    inlines = [OfferPDFInline]

    class Media:
        css = {"all": ("admin/css/custom_admin.css",)}
        js = ("admin/js/offer_pdf_modal.js",)

    def pdf_previews(self, obj):
        pdf_files = obj.pdfs.all()
        if pdf_files.exists():
            html = ""
            for pdf in pdf_files:
                if pdf.thumbnail:
                    html += f'<a href="{pdf.pdf_file.url}" target="_blank">' \
                            f'<img src="{pdf.thumbnail.url}" style="max-width:50px; max-height:50px; margin-right:2px;" />' \
                            f'</a>'
                else:
                    html += f'<a href="{pdf.pdf_file.url}" target="_blank">PDF</a> '
            return format_html(html)
        return "No PDFs"
    pdf_previews.short_description = "PDFs"
