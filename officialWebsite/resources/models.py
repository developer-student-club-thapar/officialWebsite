from django.db import models


class Topic(models.Model):
    name = models.CharField(max_length=255, blank=False)

    def __str__(self):
        return self.name


class Resource(models.Model):

    title = models.CharField(max_length=255)
    info = models.TextField()
    description = models.TextField()
    topics = models.ManyToManyField(Topic, related_name="topics", blank=True)
    link = models.URLField(blank=True)
    docs = models.URLField(blank=True)
    headline_event = models.BooleanField(default=False)
    image = models.ImageField(upload_to="resource-images/", blank=True)

    class Meta:
        ordering = ["-date"]

    def __str__(self):
        return self.title
