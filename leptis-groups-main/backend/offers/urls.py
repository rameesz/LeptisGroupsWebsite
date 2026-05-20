from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CareerApplicationViewSet, ContactMessageViewSet ,OfferViewSet

# Create a router and register our ViewSets
router = DefaultRouter()
router.register(r'career-applications', CareerApplicationViewSet, basename='careerapplication')
router.register(r'contact-messages', ContactMessageViewSet, basename='contactmessage')
router.register(r'offers', OfferViewSet, basename='offers')  


urlpatterns = [
    # Include all API endpoints from the router
    path('api/', include(router.urls)),
]
