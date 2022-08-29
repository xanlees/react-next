from django.db import models
# Create your models here.

class BBI_exchange(models.Model):
    timestamp = models.DateTimeField()
    base = models.CharField(max_length=3)
    rates = models.JSONField()