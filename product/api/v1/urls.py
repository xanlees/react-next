from django.urls import path, include
from rest_framework import routers
from .views import ProductViewSet

router = routers.DefaultRouter()
router.register(r'product', ProductViewSet)

urlpatterns = [
    path('api/v1/', include((router.urls, 'products'))),
]