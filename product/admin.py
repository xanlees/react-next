from django.contrib import admin
from parler.admin import TranslatableAdmin
from .models import Product

class ProductAdmin(TranslatableAdmin):
    list_display = ('title', 'description', 'price')
    fieldsets = (
        (None, {
            'fields': ('title', 'description', 'price'),
        }),
    )

    def save_model(self, request, obj, form, change):
        obj.user_id = request.user.id
        super().save_model(request, obj, form, change)

admin.site.register(Product, ProductAdmin)
