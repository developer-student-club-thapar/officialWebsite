from django.shortcuts import render
from . import models
from . import serializers
from rest_framework import generics
# Create your views here.
class TeamViewset(generics.ListAPIView):
    queryset = models.Team.objects.all()
    serializer_class = serializers.TeamSerializer