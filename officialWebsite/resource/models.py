from django.db import models
from officialWebsite.topic.models import Topic

# Create your models here.

class Resource(models.Model):
    name = models.CharField(max_length=255)
    url = models.URLField(max_length=200)
    topics = models.ManyToManyField(Topic, blank=True)

    def __str__(self):
        return self.name
