from rest_framework import serializers
from . import models
from members.serializers import MemberSerializer


class TeamSerializer(serializers.ModelSerializer):
    """Serialize Team model"""

    heads = MemberSerializer(read_only=True, many=True)

    class Meta:
        model = models.Team
        fields = ('id', 'name', 'members')
        read_only_fields = ('id', )
