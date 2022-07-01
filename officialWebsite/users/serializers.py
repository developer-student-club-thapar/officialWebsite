from . import models
from rest_framework import serializers


class YearSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Year
        fields = ('year',)
class UserSerializer(serializers.ModelSerializer):
    """Serialize User model"""

    image = serializers.ImageField()
    tenure = serializers.SerializerMethodField('get_tenure_list')

    def get_tenure_list(self, obj):
        years = [year.year for year in obj.years.all()]
        # max year 
        max_year = max(years)
        min_year = min(years) - 1
        return str(min_year) + "-" + str(max_year)
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
            "tenure", 
        )
        read_only_fields = ("id", )


class UserSerializerArchive(serializers.ModelSerializer):
    """Serialize User model"""

    image = serializers.ImageField()
    tenure = serializers.SerializerMethodField('get_tenure_list')

    def get_tenure_list(self, obj):
        years = [year.year for year in obj.years.all()]
        # max year 
        max_year = max(years)
        min_year = min(years) - 1
        return str(min_year) + "-" + str(max_year)
    class Meta:
        model = models.User
        fields = (
            "id",
            "name",
            "email",
            "github_url",
            "linkedin_url",
            "twitter_url",
            "medium_url",
            "dev_url",
            "image",
            "tenure", 
        )
        read_only_fields = ("id", )