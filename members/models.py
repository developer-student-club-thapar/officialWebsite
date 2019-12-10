from django.db import models


class Member(models.Model):

    name = models.CharField(max_length=255)
    role = models.CharField(max_length=255)
    github_url = models.URLField()
    linkedin_url = models.URLField()
    twitter_url = models.URLField()
    medium_url = models.URLField()
    dev_url = models.URLField()
    image = models.ImageField(upload_to='profile-images/', blank=True)

    def __str__(self):
        return self.name
