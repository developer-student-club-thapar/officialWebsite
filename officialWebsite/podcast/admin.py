from django.contrib import admin
from .models import PodcastGuest, PodcastSeries, Podcast, PodcastLink

# Register your models here.

admin.site.register(PodcastGuest)
admin.site.register(PodcastSeries)
admin.site.register(Podcast)
admin.site.register(PodcastLink)
