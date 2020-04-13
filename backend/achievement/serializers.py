from rest_framework import serializers
from . import models
from backend.members.serializers import MemberSerializer


class AchievementSerializer(serializers.ModelSerializer):
    """Serialize Achievement model"""

    members = MemberSerializer(read_only=True, many=True)

    class Meta:
        model = models.Achievement
        fields = ('id', 'title', 'sub_title', 'content', 'members')
        read_only_fields = ('id',)
