from email.mime import image
from unicodedata import name
from django.db import models
from djmoney.models.fields import MoneyField

class stock(models.Model):
    id = models.AutoField(primary_key=True)
    image = models.
    name =models.CharField(max_length=128)
    price_currency = MoneyField(max_digits=14, decimal_places=2, default_currency='LAK')
    price = models.FloatField()
    num_in_stock = models.IntegerField()
    num_allocated =models.IntegerField()
    low_stock_threshold =models.IntegerField()
    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "stock"
        verbose_name_plural = "stocks"
        ordering = ['-id', ]

    def __str__(self):
        return self.name
