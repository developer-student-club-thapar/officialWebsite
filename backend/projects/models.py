from django.db import models
from members.models import Member


class Project(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    members = models.ManyToManyField(Member)
    github_link = models.URLField()
    funding = models.CharField(max_length=255, blank=True)
    faculty = models.CharField(max_length=255, blank=True)
    extra = models.TextField(blank=True)

    def __str__(self):
        return self.name
