# Generated by Django 3.1 on 2020-08-14 19:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_auto_20200814_1254'),
    ]

    operations = [
        migrations.AlterField(
            model_name='titanic',
            name='embarked',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='titanic',
            name='fare',
            field=models.DecimalField(decimal_places=2, max_digits=10),
        ),
    ]