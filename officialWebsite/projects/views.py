from django.shortcuts import render
from . import models
from . import serializers
from rest_framework import viewsets, status, mixins, generics


class ProjectViewSet(viewsets.ModelViewSet):
    """Manage projects in the database"""

    serializer_class = serializers.ProjectSerializer
    queryset = models.Project.objects.all()
