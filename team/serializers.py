from rest_framework import serializers
from . import models
from members.serializers import MemberSerializer


class TeamSerializer(serializers.ModelSerializer):
    """Serialize Team model"""

    members = MemberSerializer(read_only=True, many=True)
    heads = MemberSerializer(read_only=True, many=True)

    class Meta:
        model = models.Team
        fields = ('id', 'name', 'heads','members')
        read_only_fields = ('id', )
