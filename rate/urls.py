from django.urls import path
from .views import ListRateAPIView, RetrieveUpdateDestroyRateAPIView
from .auto_set_view import AutoSetView

urlpatterns = [
    path("",ListRateAPIView.as_view(),name="rate"),
    path("<pk>",RetrieveUpdateDestroyRateAPIView.as_view(),name="rate"),
    path('auto_set/', AutoSetView.as_view(), name='online_view')
]