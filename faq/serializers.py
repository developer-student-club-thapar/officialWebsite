from rest_framework import serializers
from . import models


class FAQSerializer(serializers.ModelSerializer):
    """Serialize FAQ model"""

    class Meta:
        model = models.FAQ
        fields = ('id', 'question', 'answer')
        read_only_fields = ('id', )
