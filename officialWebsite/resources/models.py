from django.db import models
from officialWebsite.events.models import Topic


class Resource(models.Model):
    name = models.CharField(max_length=255, blank=False, default="")
    url = models.URLField(blank=False, default="")
    topic = models.ManyToManyField(Topic, blank=True)

    def __str__(self):
        return self.name
