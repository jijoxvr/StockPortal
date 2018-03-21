from django.contrib import admin
from nse.models import Stock
from nse.models import StockRate


# Register your models here.
admin.site.register(Stock)
admin.site.register(StockRate)
