from . import models
from rest_framework import serializers
from officialWebsite.users.serializers import UserSerializer

class PodcastGuestLinkSerializer(serializers.ModelSerializer):
    # This serializer is for guest link
    class Meta:
        model = models.PodcastGuestLink
        fields = ('id', 'link', 'link_type')
        read_only_fields = ('id',)
        
class PodcastGuestModelSerializer(serializers.ModelSerializer):
    # This is podcast model serializer.
    # guest links
    links = PodcastGuestLinkSerializer(many=True, read_only=True)
    class Meta:
        model = models.PodcastGuest
        fields = ('id', 'name', 'organisation', 'linkedin', 'about', 'image', 'links')
        read_only_fields = ('id',)

class PodcastSerializer(serializers.ModelSerializer):
    # Main podcast serializer
    guest = PodcastGuestModelSerializer(read_only=True)
    members = UserSerializer(read_only=True, many=True)
    class Meta:
        model = models.Podcast
        fields = ('id', 'number', 'name', 'guest', 'members', 'recorded_on', 'date_created', 'published', 'image', 'link')
        read_only_fields = ('id',)
class PodcastSeriesSerializer(serializers.ModelSerializer):
    # series serializer
    hosted = UserSerializer(read_only=True, many=True)
    podcasts = PodcastSerializer(many=True)
    # rename hosted to members
    class Meta:
        model = models.PodcastSeries
        fields = ('id', 'name', 'hosted', 'note', 'logo', 'link', 'podcasts')
        read_only_fields = ('id',)