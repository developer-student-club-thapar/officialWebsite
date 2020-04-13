from django.db import models
from backend.members.models import Member


class Achievement(models.Model):
    title = models.CharField(max_length=255, blank=False)
    sub_title = models.CharField(max_length=255, blank=False)
    content = models.TextField()
    members = models.ManyToManyField(Member, related_name='achivement_members', blank=True)

    def __str__(self):
        return self.title
