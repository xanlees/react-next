from django.urls import path

from bbi_exchange.api import views

urlpatterns = [
    path("<pk>",views.ExchangeRetrieveAPIView.as_view(),name="bbi_exchange"),
]
