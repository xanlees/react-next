from django.urls import path
from .views import RateListAPIView

urlpatterns = [
    path("rate/",RateListAPIView.as_view(),name="rate"),
]