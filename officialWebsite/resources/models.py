from django.db import models


class Resource(models.Model):
    name = models.CharField(max_length=255)
    link = models.URLField()

    def __str__(self):
        return self.name
