from . import models
from rest_framework import serializers
from officialWebsite.users.serializers import UserSerializer


class AchievementSerializer(serializers.ModelSerializer):
    """Serialize Achievement model"""

    members = UserSerializer(read_only=True, many=True)

    class Meta:
        model = models.Achievement
        fields = ("id", "title", "sub_title", "content", "members")
        read_only_fields = ("id",)
