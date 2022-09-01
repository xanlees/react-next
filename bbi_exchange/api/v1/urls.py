from django.urls import path

from . import views

urlpatterns = [
    path("api/v1/bbi_exchange/<pk>",views.ExchangeRetrieveAPIView.as_view(),name="bbi_exchange"),
]
