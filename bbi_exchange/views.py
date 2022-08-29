from rest_framework.generics import RetrieveAPIView
from rest_framework.generics import ListAPIView

from .serializations import BBISerializer
from .models import BBI_exchange

class ExchangeRetrieveAPIView(RetrieveAPIView):
    """This endpoint list all of the available todos from the database"""
    queryset = BBI_exchange.objects.all()
    serializer_class = BBISerializer
