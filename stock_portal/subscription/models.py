from __future__ import unicode_literals
from django.utils.datastructures import OrderedDict
from datetime import date
from django.db import models

from app_config.models import Currency


class SubscriptionCategory(OrderedDict):
    def __init__(self, *args, **kwargs):
        super(SubscriptionCategory, self).__init__(*args, **kwargs)
        self.BASIC = 0
        self.ELITE = 1
        self.PRO = 2


class Plan(models.Model):
    name = models.CharField(max_length=50)
    category = models.IntegerField()
    portfolio_evaluation_count = models.IntegerField()
    monthly_investment_tip_count = models.IntegerField()
    short_term_investment_tips_count = models.IntegerField()
    long_term_investment_tips_count = models.IntegerField()
    has_prev_month_perf_report = models.BooleanField()
    ready_made_portfolio_access_for = models.IntegerField()
    validity = models.IntegerField()
    is_active = models.BooleanField()
    rate = models.FloatField(default=None)
    currency = models.ForeignKey(Currency, default=None)

    def __str__(self):
        return "{0}".format(self.name)


class Payment(models.Model):
    date = models.DateTimeField()
    payment_id = models.CharField(max_length=50)
    profile = models.ForeignKey('authentication.Profile')
    amount = models.FloatField()
    currency = models.ForeignKey(Currency, default=None)

    def __str__(self):
        return "{0}".format(self.payment_id)


class Subscription(models.Model):
    date = models.DateField()
    plan = models.ForeignKey('Plan', on_delete=models.CASCADE)
    profile = models.ForeignKey('authentication.Profile')
    payment = models.OneToOneField('Payment')
    is_payment_completed = models.BooleanField()
    expiry_date = models.DateField()

    @property
    def is_expired(self):
        return self.expiry_date > date.today
