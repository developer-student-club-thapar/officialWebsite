from django.shortcuts import render
from . import models
from . import serializers
from rest_framework import viewsets, status, mixins, generics


class TeamViewset(viewsets.ModelViewSet):
    """Manage teams in the database"""

    serializer_class = serializers.TeamSerializer
    queryset = models.Team.objects.all()
