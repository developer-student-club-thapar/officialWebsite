from rest_framework import serializers
from . import models


class EventSerializer(serializers.ModelSerializer):
    """Serialize Event model"""

    class Meta:
        model = models.Event
        fields = ('id', 'date_time',
                  'venue', 'title', 'link', 'docs', 'headline_event')
        read_only_fields = ('id', )
