from django.db import models


class CurrencyManager(models.Manager):
    pass


# Create your models here.
class Currency(models.Model):
    name = models.CharField(max_length=25)
    code = models.CharField(max_length=10)
    exchange_rate = models.FloatField()
    is_default = models.BooleanField()
    objects = CurrencyManager()

    def __str__(self):
        return "{0} ({1})".format(self.name, self.code)