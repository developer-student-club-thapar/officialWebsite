from django.contrib import admin
from . import models
# Register your models here.
admin.site.register(models.PodcastGuest)
admin.site.register(models.PodcastSeries)
admin.site.register(models.Podcast)
admin.site.register(models.PodcastGuestLink)