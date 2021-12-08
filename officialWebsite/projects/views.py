from . import models
from . import serializers
from rest_framework import generics


class ProjectViewSet(generics.ListAPIView):
    """Manage projects in the database"""

    serializer_class = serializers.ProjectSerializer
    queryset = models.Project.objects.all()
