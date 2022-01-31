from rest_framework import serializers
from .models import Resource
from officialWebsite.topic.serializers import TopicSerializer
class ResourceSerializer(serializers.ModelSerializer):
    topics = TopicSerializer(read_only=True, many=True)
    class Meta:
        model = Resource
        fields = ("name", "url", "topics")
