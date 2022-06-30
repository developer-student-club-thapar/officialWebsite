import sys
from django.db import models
from officialWebsite.topic.models import Topic
from django.core.files.uploadedfile import InMemoryUploadedFile
from PIL import Image
from io import BytesIO
# Create your models here.

class Event(models.Model):
    start_date = models.DateField()
    end_date = models.DateField()
    start_time = models.TimeField()
    end_time = models.TimeField()
    venue = models.CharField(max_length=256)
    title = models.CharField(max_length=256)
    info = models.TextField()
    topics = models.ManyToManyField(Topic, blank=True)
    link = models.URLField(max_length=256)
    docs = models.URLField(max_length=256)
    headline_event = models.BooleanField(default=False)
    image = models.ImageField(upload_to="event-images/", blank=True)

    class Meta:
        ordering = ["-start_date"]

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        if self.image:
            self.image = self.image
            # rename the file
            self.image.name = "{}.jpg".format(self.title + "_" + self.venue + "_" + str(self.start_date) + str(self.end_date))
        super(Event, self).save(*args, **kwargs)
