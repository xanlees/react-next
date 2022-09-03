from django.urls import path
from .views import TenantView

urlpatterns = [
    path('api/v1/tenant/', TenantView.as_view(), name='tenant')
]