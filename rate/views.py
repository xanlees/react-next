from rest_framework.generics import RetrieveAPIView
from rest_framework.generics import ListAPIView

from .serializations import RateSerializer
from djmoney.contrib.exchange.models import Rate


class RateListAPIView(ListAPIView):
    """This endpoint list all of the available todos from the database"""
    queryset = Rate.objects.all()
    serializer_class = RateSerializer
