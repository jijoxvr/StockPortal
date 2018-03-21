from django_cron import CronJobBase, Schedule
from nsetools import Nse
from nse.models import Stock
from datetime import date


class StocksUpdaterJob(CronJobBase):
    RUN_EVERY_MINS = 10  # every 2 hours

    schedule = Schedule(run_every_mins=RUN_EVERY_MINS)
    code = 'nse.stocks_list_updater'

    def do(self):
        nse = Nse()
        all_stock_codes = nse.get_stock_codes()
        Stock.objects.all().delete()
        models_to_create = []
        for code, name in all_stock_codes.items():
            models_to_create.append(Stock(code=code, name=name, updated_on=date.today()))
        Stock.objects.bulk_create(models_to_create)


class StocksRateUpdaterJob(CronJobBase):
    RUN_EVERY_MINS = 10  # every 2 hours

    schedule = Schedule(run_every_mins=RUN_EVERY_MINS)
    code = 'nse.stocks_rate_updater'

    def do(self):
        nse = Nse()
        all_stock_codes = nse.get_stock_codes()
        Stock.objects.all().delete()
        models_to_create = []
        for code, name in all_stock_codes.items():
            models_to_create.append(Stock(code=code, name=name, updated_on=date.today()))
        Stock.objects.bulk_create(models_to_create)
