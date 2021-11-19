from django.db import models
from officialWebsite.users.models import User

# Create your models here.

class topic(models.Model):
    name = models.CharField(max_length=255)
    members = models.ManyToManyField(User)

    def __str__(self):
        return self.name
