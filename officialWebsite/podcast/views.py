from . import models
from . import serializers
from rest_framework import generics
# Create your views here.
"""
Podcast
PodcastGuest
PodcastSeries
PodcastGuestLink
"""

class PodcastViewset(generics.ListAPIView):
    queryset = models.Podcast.objects.all()
    serializer_class = serializers.PodcastSerializer