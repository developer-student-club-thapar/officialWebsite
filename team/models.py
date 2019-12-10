from django.db import models
from django.contrib.auth.models import User
from members.models import Member


class Team(models.Model):

    name = models.CharField(max_length=255)
    heads = models.ManyToManyField(Member, related_name='heads')
    members = models.ManyToManyField(Member, related_name='members')

    def __str__(self):
        return self.name
