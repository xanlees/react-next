from django.contrib import admin
from django.contrib.admin import register
from stock.models import stock


@register(stock)
class StockAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'price']
