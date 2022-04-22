from . import models
from rest_framework import serializers


class YearSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Year
        fields = ('year',)
class UserSerializer(serializers.ModelSerializer):
    """Serialize User model"""

    image = serializers.ImageField()
    years = serializers.SerializerMethodField('get_tenure_list')

    def get_tenure_list(self, obj):
        return [year.year for year in obj.years.all()]
    # get only one year
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
            "years", 
        )
        read_only_fields = ("id", )