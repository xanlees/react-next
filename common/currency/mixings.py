from django.conf import settings
from djmoney.money import Money

from djmoney.contrib.exchange.models import convert_money

class ConvertSerializerMixin(object):


    def to_representation(self, instance):
        request = self.context.get('request')
        currency_code = request.query_params.get('currency')

        if currency_code in settings.CURRENCIES:       
            for attritubte in vars(instance):
                money = getattr(instance, attritubte)
                if isinstance(money, Money ):
                    new_money = convert_money(money, currency_code)
                    setattr(instance, attritubte, new_money)
            
        inst_rep = super().to_representation(instance) 
        return inst_rep