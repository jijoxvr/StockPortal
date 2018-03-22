from __future__ import unicode_literals
from django.contrib.auth.models import User
from django.db import models


# Create your models here.
class Profile(models.Model):
    user = models.OneToOneField(User)
    first_name = models.CharField(max_length=50)
    public_email = models.EmailField(null=True, blank=True)
    location = models.CharField(max_length=50)
    primary_phone = models.CharField(max_length=50)
    secondary_phone = models.CharField(max_length=50)
    created_on = models.DateTimeField()
    last_modified_on = models.DateTimeField()

    def __str__(self):
        return "{0} ({1})".format(self.first_name, self.public_email)