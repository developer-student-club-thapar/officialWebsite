from django.db import models
from officialWebsite.topic.models import topic
# Create your models here.

class event(models.Model):
    date = models.DateField()
    time = models.TimeField()
    venue = models.CharField(max_length=256)
    title = models.CharField(max_length=256)
    info = models.TextField()
    topics = models.ManyToManyField(topic, blank=True)
    link = models.URLField(max_length=256)
    docs = models.URLField(max_length=256)
    headline_event = models.BooleanField(default=False)
    image = models.ImageField(upload_to="event-images/", blank=True)

    class Meta:
        ordering = ["-date"]

    def __str__(self):
        return self.title
