from django.db import models


class Resource(models.Model):
    name = models.CharField(max_length=255, blank=False, default="Human")
    title = models.CharField(max_length=255, default="Human")
    info = models.TextField(max_length=255, default="Human")
    description = models.TextField(max_length=255, default="Human")
    link = models.URLField(blank=True)
    docs = models.URLField(blank=True)
    headline_event = models.BooleanField(default=False)
    image = models.ImageField(upload_to="resource-images/", blank=True)

    def __str__(self):
        return self.name
