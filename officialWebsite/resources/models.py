from django.db import models


class Resource(models.Model):
    name = models.CharField(max_length=255)
    link = models.URLField()
    tag = models.CharField(max_length=20, default='Web')

    def __str__(self):
        return self.name
