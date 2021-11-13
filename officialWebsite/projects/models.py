from django.db import models
from officialWebsite.users.models import User


class Project(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    project_lead = models.ManyToManyField(User, related_name="leads")
    image = models.ImageField(upload_to="project-images/", blank=True)
    members = models.ManyToManyField(User, related_name="members")
    github_link = models.URLField()
    funding = models.CharField(max_length=255, blank=True)
    faculty = models.CharField(max_length=255, blank=True)
    extra = models.TextField(blank=True)

    def __str__(self):
        return self.name
