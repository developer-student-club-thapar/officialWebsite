from rest_framework import serializers
from .models import resource


class resourceSerializer(serializers.ModelSerializer):
    class Meta:
        model = resource
        fields = "__all__"
