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


class FAQSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.FAQ
        fields = ("id", "question", "answer")
        read_only_fields = ("id",)

class ContactRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ContactRequest
        fields = ("id", "name", "email", "message")
        read_only_fields = ("id",)

class SponsorSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Sponsor
        fields = ("id", "name", "image", "url")
        read_only_fields = ("id",)
