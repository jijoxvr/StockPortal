from django.db import models
from config.models import Currency
# Create your models here.


class StockManager(models.Manager):
    pass


class Stock(models.Model):
    code = models.CharField(max_length=25, primary_key=True)
    name = models.CharField(max_length=150)
    updated_on = models.DateField()
    objects = StockManager()

    def __str__(self):
        return "{0} ({1})".format(self.name, self.code)


class StockRateManager(models.Manager):
    pass


class StockRate(models.Model):
    stock = models.ForeignKey(Stock)
    rate = models.FloatField()
    currency = models.ForeignKey(Currency)
    last_updated_on = models.DateTimeField()
    objects = StockRateManager()

    def __str__(self):
        return "{0} - {1}".format(self.stock, self.rate)
