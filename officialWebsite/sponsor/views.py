from django.shortcuts import render
from . import models
from . import serializers
from rest_framework import viewsets, status, mixins, generics


class SponsorViewSet(generics.ListAPIView):
    """Manage sponsors in the database"""

    serializer_class = serializers.SponsorSerializer
    queryset = models.Sponsor.objects.all()
