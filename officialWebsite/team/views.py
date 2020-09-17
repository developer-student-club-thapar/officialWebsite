from django.shortcuts import render
from . import models
from . import serializers
from rest_framework import viewsets, status, mixins, generics
from rest_framework.views import APIView
from rest_framework.response import Response


class TeamViewset(generics.ListAPIView):
    """Manage teams in the database"""

    serializer_class = serializers.TeamSerializer
    queryset = models.Team.objects.all()


class Archive(APIView):
    def get(self, request, year, *args, **kwargs):
        print(year)
        Team = models.Team.objects.get(name=year)
        team_serializer = serializers.TeamSerializer(Team)
        return Response(team_serializer.data)
