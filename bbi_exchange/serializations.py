from rest_framework import serializers

from .models import BBI_exchange


class BBISerializer(serializers.ModelSerializer):
    class Meta:
        model = BBI_exchange
        fields = '__all__'
