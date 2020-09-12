from django.db import models


class Sponsor(models.Model):

    name = models.CharField(max_length=255)
    image = models.ImageField(upload_to="sponsor-images/", blank=True)
    url = models.URLField()

    def __str__(self):
        return self.name
