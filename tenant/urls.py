from django.urls import path
from .views import *

urlpatterns = [
    path('', TenantView.as_view())
]