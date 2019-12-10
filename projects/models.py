from django.db import models
from members.models import Member


class Project(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    members = models.ManyToManyField(Member)
    funding = models.CharField(max_length=255)
    faculty = models.CharField(max_length=255)
    extra = models.TextField()

    def __str__(self):
        return self.name
