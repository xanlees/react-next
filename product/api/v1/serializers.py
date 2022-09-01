from django.conf import settings
from django.utils.module_loading import import_string
from parler_rest.fields import TranslatedFieldsField
from parler_rest.serializers import TranslatableModelSerializer

from product.models import Product

ConvertSerializerMixin =import_string(settings.CURRENCY_MIXIN)
TranslatedSerializerMixin = import_string(settings.TRANSLATE_MIXIN)

class ProductSerializer(ConvertSerializerMixin, TranslatedSerializerMixin, TranslatableModelSerializer):
    translations = TranslatedFieldsField(shared_model=Product)
    class Meta:
        model = Product
        fields =  ('id', 'translations', 'user', 'price', 'price_currency', 'created_on', 'updated_on')
