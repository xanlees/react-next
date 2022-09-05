from rest_framework import viewsets
from .models import Product, stock
from .serializers import StockSerializer

class StockSerializer(viewsets.ModelViewSet):
    queryset = stock.objects.all()
    serializer_class = StockSerializer