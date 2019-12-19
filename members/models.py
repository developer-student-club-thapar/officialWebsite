from django.db import models


class Member(models.Model):

    name = models.CharField(max_length=255)
    role = models.CharField(max_length=255)
    github_url = models.URLField(blank=True)
    linkedin_url = models.URLField(blank=True)
    twitter_url = models.URLField(blank=True)
    medium_url = models.URLField(blank=True)
    dev_url = models.URLField(blank=True)
    image = models.ImageField(upload_to='profile-images/', blank=True)

    def __str__(self):
        return self.name
