from rest_framework import serializers
from .models import topic


class topicSerializer(serializers.ModelSerializer):
    class Meta:
        model = topic
        fields = "__all__"
