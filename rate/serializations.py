from rest_framework import serializers
from djmoney.contrib.exchange.models import Rate

class RateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rate
        fields = '__all__'