# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2018-03-22 09:48
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('app_config', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Stock',
            fields=[
                ('code', models.CharField(max_length=25, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=150)),
                ('updated_on', models.DateField()),
            ],
        ),
        migrations.CreateModel(
            name='StockRate',
            fields=[
                ('code', models.CharField(max_length=25, primary_key=True, serialize=False)),
                ('rate', models.FloatField()),
                ('last_updated_on', models.DateTimeField()),
                ('currency', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app_config.Currency')),
                ('stock', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='nse.Stock')),
            ],
        ),
    ]
