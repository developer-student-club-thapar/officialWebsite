from . import models
from . import serializers
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.views import APIView

class ProjectViewSet(APIView):
    """Manage Projects in the database"""
    def get(self, request, format=None):
        projects = models.Project.objects.all()
        serializer = serializers.ProjectSerializer(projects, many=True)
        return Response(serializer.data)