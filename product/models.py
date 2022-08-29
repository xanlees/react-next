from pydoc import describe
from django.db import models
from django.contrib.auth.models import User
from django.utils.translation import gettext as _
from parler.models import TranslatableModel, TranslatedFields
from djmoney.models.fields import MoneyField


class Product(TranslatableModel):
    translations = TranslatedFields(
        title = models.CharField(_("Title"), max_length=200, unique=True),
        description = models.TextField(_("Description"), blank=True)
    )
    price = MoneyField(max_digits=14, decimal_places=2, default_currency='LAK')
    user = models.ForeignKey(User, on_delete= models.CASCADE,related_name='product',null=True)
    updated_on = models.DateTimeField(auto_now= True)
    created_on = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_on']
        verbose_name = _("Product")
        verbose_name_plural = _("Products")

    def __str__(self):
        return self.title
