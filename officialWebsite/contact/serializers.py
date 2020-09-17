from rest_framework import serializers
from . import models


class ContactReqSerializer(serializers.ModelSerializer):
    """Serialize Contact Requests model"""

    class Meta:
        model = models.ContactRequest
        fields = ("id", "name", "email", "message")
        read_only_fields = ("id",)
