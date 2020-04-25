from rest_framework import serializers
from . import models


class TopicSerializer(serializers.ModelSerializer):
    """Serialize Topic model"""

    class Meta:
        model = models.Topic
        fields = ('id', 'name')
        read_only_fields = ('id',)


class EventSerializer(serializers.ModelSerializer):
    """Serialize Event model"""

    topics = TopicSerializer(read_only=True, many=True)
    image = serializers.ImageField()

    class Meta:
        model = models.Event
        fields = ('id', 'date', 'time', 'venue', 'title', 'info', 'topics', 'link', 'docs', 'headline_event', 'image')
        read_only_fields = ('id',)
