from . import models
from . import serializers
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.views import APIView

from officialWebsite import podcast
# Create your views here.
"""
Podcast
PodcastGuest
PodcastSeries
PodcastGuestLink
"""

class PodcastViewset(APIView):
    """Manage Podcasts in the database"""
    def get(self, request, format=None):
        podcasts = models.Podcast.objects.all()
        serializer = serializers.PodcastSerializer(podcasts, many=True)
        return Response(serializer.data)