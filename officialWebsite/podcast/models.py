from django.db import models
from officialWebsite.users.models import User

# Create your models here.
class PodcastGuest(models.Model):
    """
    Podcast guest, name, org, fn, about and image details
    """

    name = models.CharField(max_length=255)
    organisation = models.CharField(max_length=128)
    about = models.CharField(max_length=128)
    image = models.ImageField(upload_to='podcast_guest/', blank=True)

    def __str__(self):
        return f"{self.name} from {self.organisation}"

class PodcastSeries(models.Model):
    """
    Podcast series name, other details link logo and stuff
    """

    name = models.CharField(max_length=255)
    hosted = models.ManyToManyField(User)
    note = models.CharField(max_length=1000)
    logo = models.ImageField(upload_to='podcast_logo/')

    def __str__(self):
        return f"{self.name}"
    
class Podcast(models.Model):
    """
    Basic models for podcasts and its details
    """

    number = models.IntegerField()
    guest = models.ForeignKey(PodcastGuest, on_delete=models.PROTECT)
    series = models.ForeignKey(PodcastSeries, on_delete=models.PROTECT)
    recorded_on = models.DateTimeField(null = True)
    date_created = models.DateTimeField(auto_now_add=True)
    published = models.BooleanField(default=True)
    image = models.ImageField(upload_to='podcast_image/', null=True)
    link = models.URLField(max_length=255, null=True)

    def __str__(self):
        return f"{self.number} - {self.guest} - {self.series}"


class PodcastGuestLink(models.Model):
    """
    Podcast guest links to other site links
    """

    guest = models.ForeignKey(PodcastGuest, on_delete=models.PROTECT)
    link = models.URLField(max_length=255)
    link_type = models.TextField(max_length=255)
    
    def __str__(self):
        return f"{self.guest.name} : {self.link_type} : {self.link}"
