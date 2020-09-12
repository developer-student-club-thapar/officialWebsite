from django.db import models
from officialWebsite.members.models import Member

# Create your models here.


class PodcastGuest(models.Model):
    """
    PodCast Guest and its name ,Organisation fn About and Image Details
    """

    name = models.CharField(max_length=256)
    organisation = models.CharField(max_length=128)
    about = models.CharField(max_length=128)
    image = models.ImageField(upload_to="podcast_guest/", blank=True)

    def __str__(self):
        return f"{self.name} from {self.organisation}"


class PodcastSeries(models.Model):
    """
    Podcast Series Name and its Other Details link Logo and Stuff
    """

    name = models.CharField(max_length=256)
    hosted = models.ManyToManyField(Member)
    note = models.CharField(max_length=1000)
    logo = models.ImageField(upload_to="podcast_logo/")

    def __str__(self):
        return f"{self.name}"


class Podcast(models.Model):
    """
    Basic Models For Podcasts and its details
    """

    no = models.PositiveIntegerField()
    guest = models.ForeignKey(PodcastGuest, on_delete=models.PROTECT)
    series = models.ForeignKey(PodcastSeries, on_delete=models.PROTECT)
    recorded_on = models.DateTimeField(null=True)
    date_created = models.DateTimeField(auto_now_add=True)
    published = models.BooleanField(default=True)
    image = models.ImageField(upload_to="podcast_image/", null=True)

    def __str__(self):
        return f"{self.series.name} : {self.no}"


class Link(models.Model):
    """
    Base Class for Links of Any Model
    """

    link = models.URLField()
    name = models.CharField(max_length=128)
    published = models.BooleanField(default=True)


class PodcastLink(Link):
    """
    Podcast Links to other Websites
    """

    podcast = models.ForeignKey(Podcast, on_delete=models.PROTECT)

    def __str__(self):
        return f"{self.podcast.name} : {self.no}"


class PodcastGuestLink(models.Model):
    """
    Podcast Guest Other Site Links
    """

    guest = models.ForeignKey(PodcastGuest, on_delete=models.PROTECT)

    def __str__(self):
        return f"{self.guest.name} : {self.no}"
