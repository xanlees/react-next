from parler_rest.fields import TranslatedFieldsField
from parler_rest.serializers import TranslatableModelSerializer
from product.mixings import TranslatedSerializerMixin
from product.models import Product
from .currency_mixings import ConvertSerializerMixin 


class ProductSerializer(TranslatedSerializerMixin, ConvertSerializerMixin, TranslatableModelSerializer):
    translations = TranslatedFieldsField(shared_model=Product)
    class Meta:
        model = Product
        fields =  ('id', 'translations', 'user', 'price', 'price_currency', 'created_on', 'updated_on')