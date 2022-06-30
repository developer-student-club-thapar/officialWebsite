from rest_framework import serializers
from .models import Event
from officialWebsite.topic.serializers import TopicSerializer


class EventSerializer(serializers.ModelSerializer):
    topics = TopicSerializer(read_only=True, many=True)
    class Meta:
        model = Event
        fields = ('id', 'date', 'time', 'venue', 'title', 'info', 'topics', 'link', 'docs', 'headline_event', 'image')
