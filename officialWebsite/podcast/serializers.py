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
    embed = serializers.SerializerMethodField('get_embed')
    
    def get_embed(self, obj):
        try:
            link = obj.link
            url_elements = link.split('/')
            # add 'embed' at 4th index
            url_elements.insert(4, 'embed')
            url_elements[1] = "/"
            embed = '/'.join(str(element) for element in url_elements)
            return embed
        except:
            return obj.link
    class Meta:
        model = models.Podcast
        fields = ('id', 'number', 'name', 'guest', 'members', 'recorded_on', 'date_created', 'published', 'image', 'link', 'embed')
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