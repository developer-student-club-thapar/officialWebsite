from . import models
from . import serializers
from rest_framework import viewsets, status, mixins, generics


class ResourceViewset(viewsets.ModelViewSet):
    """Manage Resources in the database"""

    serializer_class = serializers.ResourceSerializer
    queryset = models.Resource.objects.all()
