from rest_framework import serializers
from .models import Team
from officialWebsite.users.serializers import UserSerializer


class TeamSerializer(serializers.ModelSerializer):
    users = UserSerializer(read_only=True, many=True)
    class Meta:
        model = Team
        fields = ("id", "name", "users")
