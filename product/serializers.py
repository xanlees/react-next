from .models import Product
from .mixings import TranslatedSerializerMixin
from parler_rest.serializers import TranslatableModelSerializer
from parler_rest.fields import TranslatedFieldsField

class ProductSerializer(TranslatedSerializerMixin, TranslatableModelSerializer):
    translations = TranslatedFieldsField(shared_model=Product)
    class Meta:
        model = Product
        fields = ('translations', 'user', 'price', 'created_on', 'updated_on')