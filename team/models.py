from django.db import models
from django.contrib.auth.models import User
from members.models import Member


class Team(models.Model):

    name = models.CharField(max_length=255)
    heads = models.ManyToManyField(Member, related_name='heads', blank=True)

    def __str__(self):
        return self.name
