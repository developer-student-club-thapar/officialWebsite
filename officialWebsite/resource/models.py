from django.db import models
from officialWebsite.topic.models import topic

# Create your models here.

class resource(models.Model):
    name = models.CharField(max_length=255)
    url = models.URLField(max_length=200)
    topic = models.ForeignKey(topic, on_delete=models.CASCADE)

    def __str__(self):
        return self.name
