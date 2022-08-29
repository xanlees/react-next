from djmoney.contrib.exchange.backends.base import SimpleExchangeBackend
from django.core.exceptions import ImproperlyConfigured
from django.conf import settings

class BBIBackend(SimpleExchangeBackend):
    name = "BBI_Backend"

    def __init__(self, url=settings.BBI_EXCHANGE_URL, access_key=settings.BBI_EXCHANGE_KEY):
        if access_key is None:
            raise ImproperlyConfigured("settings.BBI_EXCHANGE_KEY should be set to use Backend")
        self.url = url
        self.access_key = access_key

    def get_params(self):
        return {"access_key": self.access_key}

