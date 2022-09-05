
from .models import stock
from rest_framework import serializers

class StockSerializer (serializers.ModelSerializer):
    class Meta:
        model = stock
        fields = ('id', 'url', 'price_currency', 'price', 'num_in_stock', 'num_allocated' , 'low_stock_threshold', 'date_created', 'date_updated', 'product', 'partner')