from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from .views import StockViewSet

router = routers.DefaultRouter()
router.register(r'stock', StockViewSet)

urlpatterns = [
    path('api/', include((router.urls, 'stocks'))),
]