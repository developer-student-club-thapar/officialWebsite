from . import models
from rest_framework import serializers
from officialWebsite.users.serializers import UserSerializer


class ProjectSerializer(serializers.ModelSerializer):
    """Serialize Project model"""

    members = UserSerializer(read_only=True, many=True)
    project_lead = UserSerializer(many=True)
    image = serializers.ImageField()

    class Meta:
        model = models.Project
        fields = (
            "id",
            "name",
            "project_lead",
            "image",
            "description",
            "members",
            "github_link",
            "funding",
            "faculty",
            "extra",
        )
        read_only_fields = ("id",)
