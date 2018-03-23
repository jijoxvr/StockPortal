# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2018-03-22 13:14
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('authentication', '0001_initial'),
        ('app_config', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Payment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateTimeField()),
                ('payment_id', models.CharField(max_length=50)),
                ('amount', models.FloatField()),
                ('currency', models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='app_config.Currency')),
                ('profile', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='authentication.Profile')),
            ],
        ),
        migrations.CreateModel(
            name='Plan',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('category', models.IntegerField()),
                ('portfolio_evaluation_count', models.IntegerField()),
                ('monthly_investment_tip_count', models.IntegerField()),
                ('short_term_investment_tips_count', models.IntegerField()),
                ('long_term_investment_tips_count', models.IntegerField()),
                ('has_prev_month_perf_report', models.BooleanField()),
                ('ready_made_portfolio_access_for', models.IntegerField()),
                ('validity', models.IntegerField()),
                ('is_active', models.BooleanField()),
                ('rate', models.FloatField(default=None)),
                ('currency', models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='app_config.Currency')),
            ],
        ),
        migrations.CreateModel(
            name='Subscription',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField()),
                ('is_payment_completed', models.BooleanField()),
                ('expiry_date', models.DateField()),
                ('payment', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='subscription.Payment')),
                ('plan', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='subscription.Plan')),
                ('profile', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='authentication.Profile')),
            ],
        ),
    ]
