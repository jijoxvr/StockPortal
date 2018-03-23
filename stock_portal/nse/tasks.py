from celery.task import periodic_task
from celery.schedules import crontab
from datetime import datetime
import logging

import time

from django.db import transaction, DatabaseError
from django_cron import Schedule
from urllib.error import URLError
from nsetools import Nse
from app_config.models import Currency
from app_config.common import get_cron_logger
from nse.models import Stock, StockRate
from datetime import date
from django.utils import timezone


class StocksUpdaterJob(object):

    def run(self):
        logger = get_cron_logger()
        logger.info("Going to run stock index updater cron")
        nse = Nse()
        try:
            with transaction.atomic():
                all_stock_codes = nse.get_stock_codes()
                all_stock_codes.pop('SYMBOL', None)
                models_to_create = []
                for code, name in all_stock_codes.items():
                    models_to_create.append(Stock(code=code, name=name, updated_on=date.today()))
                Stock.objects.all().delete()
                Stock.objects.bulk_create(models_to_create)
                logger.info("Completed stock updater cron")
        except URLError:
            logger.error("Unable to connect to nse")
        except DatabaseError:
            logger.error("Database error")
        except Exception as e:
            logger.error("Error happened")


class StocksRateUpdaterJob(object):

    def run(self):
        logger = get_cron_logger()
        logger.info("Going to run stock rate updater cron")
        cnt = 0
        stocks = Stock.objects.all()
        currency = Currency.objects.filter(is_default=True).first()
        nse = Nse()
        try:
            with transaction.atomic():
                models_to_create = []
                for stock in stocks:
                    cnt += 1
                    try:
                        quote = nse.get_quote(stock.code)
                        time.sleep(.300)
                        stock_rate = StockRate(code=stock.code, stock=stock,
                                               rate=quote['basePrice'], currency=currency,
                                               last_updated_on=timezone.now())
                        models_to_create.append(stock_rate)
                        logger.info("Completed for {0} - {1}".format(cnt, stock))
                    except Exception as er:
                        logger.error("Error for {0} - {1} - {2}".format(cnt, stock, er))
                StockRate.objects.all().delete()
                StockRate.objects.bulk_create(models_to_create)
                logger.info("Completed stock rate updater cron")
        except URLError:
            logger.error("Unable to connect to nse")
        except DatabaseError:
            logger.error("Database error")
        except Exception as e:
            logger.error("Error happened")


@periodic_task(run_every=(crontab(minute='*/1')), name="some_task", ignore_result=True)
def sample_periodic_task():
    logging.info("Start task")
    now = datetime.now()
    result = now.day + now.minute
    logging.info("Task finished: result = %i" % result)

