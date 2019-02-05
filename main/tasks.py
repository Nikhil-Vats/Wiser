from celery.decorators import task
from celery.utils.log import get_task_logger
from celery.task.schedules import crontab
from celery.decorators import periodic_task
from django.core.mail import EmailMessage
from .models import Userdata
import datetime as dt
from django.contrib.auth.models import User


@periodic_task(run_every=(crontab(hour=9, minute=30)), name="exp_task", ignore_result=True)
def exp_task():
    for ud in Userdata.objects.filter(status=2):
        if ud.email_date == dt.date.today():
            mail_subject = "Next round"
            message = "Hi"
            to_email = User.objects.get(pk=ud.user_id).email
            email = EmailMessage(mail_subject, message, to=[to_email])
            email.send()

    for ud in Userdata.objects.filter(group="control"):
    	if ud.email_date == dt.date.today():



