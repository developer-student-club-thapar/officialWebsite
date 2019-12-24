from rest_framework import serializers
from . import models


class MemberSerializer(serializers.ModelSerializer):
    """Serialize Member model"""

    image = serializers.ImageField()

    class Meta:
        model = models.Member
        fields = ('id', 'name',
                  'role', 'email', 'github_url', 'linkedin_url', 'twitter_url', 'medium_url', 'dev_url', 'image')
        read_only_fields = ('id', )
