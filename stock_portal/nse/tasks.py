from celery.task import periodic_task
from datetime import timedelta, datetime
import logging


@periodic_task(run_every=timedelta(minutes=1))
def sample_periodic_task():
    logging.info("Start task")
    now = datetime.now()
    result = now.day + now.minute
    logging.info("Task finished: result = %i" % result)
