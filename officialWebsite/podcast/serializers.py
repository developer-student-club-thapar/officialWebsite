from . import models
from rest_framework import serializers

class PodcastSeriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.PodcastSeries
        fields = ('id', 'name', 'hosted', 'note', 'logo')
        read_only_fields = ('id',)

class PodcastGuestModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.PodcastGuest
        fields = ('id', 'name', 'organisation', 'about', 'image')
        read_only_fields = ('id',)
    
class PodcastGuestSerializer(serializers.ModelSerializer):
    guest = PodcastGuestModelSerializer(read_only=True)
    class Meta:
        model = models.PodcastGuestLink
        fields = ('id', 'guest', 'link', 'link_type')
        read_only_fields = ('id',)

class PodcastSerializer(serializers.ModelSerializer):
    series = PodcastSeriesSerializer(read_only=True)
    guest = PodcastGuestSerializer(read_only=True)
    class Meta:
        model = models.Podcast
        fields = ('id', 'number', 'guest', 'series', 'recorded_on', 'date_created', 'published', 'image', 'link')
        read_only_fields = ('id',)
