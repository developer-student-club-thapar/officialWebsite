from django.shortcuts import render
from . import models
from . import serializers
from rest_framework import viewsets, status, mixins, generics


class AchievementViewset(generics.ListAPIView):
    """Manage Achievements in the database"""

    serializer_class = serializers.AchievementSerializer
    queryset = models.Achievement.objects.all()
