from rest_framework import serializers
from . import models


class ResourceSerializer(serializers.ModelSerializer):
    """Serialize Resources model"""

    class Meta:
        model = models.Resource
        fields = ("id", "name", "link")
        read_only_fields = ("id",)
