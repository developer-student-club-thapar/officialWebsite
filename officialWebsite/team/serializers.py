from rest_framework import serializers
from .models import team


class teamSerializer(serializers.ModelSerializer):
    class Meta:
        model = team
        fields = "__all__"
