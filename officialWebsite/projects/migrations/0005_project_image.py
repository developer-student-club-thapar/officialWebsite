# Generated by Django 2.2.10 on 2020-04-25 18:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("projects", "0004_project_project_lead"),
    ]

    operations = [
        migrations.AddField(
            model_name="project",
            name="image",
            field=models.ImageField(blank=True, upload_to="project-images/"),
        ),
    ]