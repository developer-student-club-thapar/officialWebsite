from django.db import models


class Event(models.Model):

    date_time = models.DateTimeField()
    venue = models.CharField(max_length=255)
    title = models.CharField(max_length=255)
    link = models.URLField()
    docs = models.URLField()
    headline_event = models.BooleanField(default=False)

    def __str__(self):
        return self.title
