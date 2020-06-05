from . import models
from . import serializers
from rest_framework import viewsets, status, mixins, generics


class ResourceViewset(generics.ListAPIView):
    """Manage Resources in the database"""

    serializer_class = serializers.ResourceSerializer
    queryset = models.Resource.objects.all()
