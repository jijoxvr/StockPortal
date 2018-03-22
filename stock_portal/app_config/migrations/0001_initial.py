# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2018-03-22 09:48
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Currency',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=25)),
                ('code', models.CharField(max_length=10)),
                ('exchange_rate', models.FloatField()),
                ('is_default', models.BooleanField()),
            ],
        ),
    ]
