from rest_framework import serializers
from . import models


class SponsorSerializer(serializers.ModelSerializer):
    """Serialize Sponsor model"""

    image = serializers.ImageField()

    class Meta:
        model = models.Sponsor
        fields = ("id", "name", "image", "url")
        read_only_fields = ("id",)
