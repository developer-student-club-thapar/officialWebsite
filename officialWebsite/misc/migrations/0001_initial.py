# Generated by Django 3.2.9 on 2021-11-13 17:58

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Achievement',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('sub_title', models.CharField(max_length=255)),
                ('content', models.TextField()),
                ('members', models.ManyToManyField(blank=True, related_name='achievement_members', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
