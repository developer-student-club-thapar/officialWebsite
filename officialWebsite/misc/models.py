from django.db import models
from officialWebsite.users.models import User


class Achievement(models.Model):
    title = models.CharField(max_length=255, blank=False)
    sub_title = models.CharField(max_length=255, blank=False)
    content = models.TextField()
    members = models.ManyToManyField(
        User, related_name="achievement_members", blank=True
    )

    def __str__(self):
        return self.title
