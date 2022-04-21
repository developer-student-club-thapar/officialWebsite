from . import models
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    """Serialize User model"""

    image = serializers.ImageField()
    # get only one year
    year = serializers.SerializerMethodField('get_year')
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
            "year",
        )
        read_only_fields = ("id", )

    def get_year(self, obj):
        # get year 
        return obj.year.year