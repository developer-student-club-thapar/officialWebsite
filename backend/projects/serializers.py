from rest_framework import serializers
from . import models
from members.serializers import MemberSerializer


class ProjectSerializer(serializers.ModelSerializer):
    """Serialize Project model"""

    members = MemberSerializer(read_only=True, many=True)

    class Meta:
        model = models.Project
        fields = ('id', 'name', 'description', 'members', 'github_link', 'funding', 'faculty', 'extra')
        read_only_fields = ('id',)
