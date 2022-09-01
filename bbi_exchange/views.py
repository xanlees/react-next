from rest_framework.generics import  RetrieveAPIView

from .models import BBI_exchange
from .serializations import BBISerializer


class ExchangeRetrieveAPIView(RetrieveAPIView):
    """This endpoint list all of the available todos from the database"""
    queryset = BBI_exchange.objects.all()
    serializer_class = BBISerializer
