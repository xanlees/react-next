from rest_framework import serializers
from django.utils.module_loading import import_string
from django.conf import settings
from djmoney.contrib.exchange.models import Rate

class AutoSetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rate
        fields = ()

    
    def create(self):
        backend_module = import_string(settings.EXCHANGE_BACKEND)
        backend = backend_module(settings.BBI_EXCHANGE_URL)
        backend.update_rates()
    