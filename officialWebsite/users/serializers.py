from . import models
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    """Serialize User model"""

    image = serializers.ImageField()

    class Meta:
        model = models.User
        fields = (
            "id",
            "name",
            "role",
            "email",
            "github_url",
            "linkedin_url",
            "twitter_url",
            "medium_url",
            "dev_url",
            "image",
        )
        read_only_fields = ("id",)
