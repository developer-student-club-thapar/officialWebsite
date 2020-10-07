from rest_framework import serializers
from . import models


class TopicSerializer(serializers.ModelSerializer):
    """Serialize Topic model"""

    class Meta:
        model = models.Topic
        fields = ("id", "name")
        read_only_fields = ("id",)


class ResourceSerializer(serializers.ModelSerializer):
    """Serialize Resource model"""

    topics = TopicSerializer(read_only=True, many=True)
    # image = serializers.ImageField()
    # info = serializers.TextField()
    # description = serializers.TextField()

    class Meta:
        model = models.Resource
        fields = (
            "id",
            "title",
            "topics",
            "link",
            "docs",
            "headline_event",
            "image",
        )
        read_only_fields = ("id",)
