from django.shortcuts import render
from . import models
from . import serializers
from rest_framework import viewsets, status, mixins, generics

# Create your views here.


class EventViewSet(viewsets.ModelViewSet):
    """Manage Events in the database"""

    serializer_class = serializers.EventSerializer
    queryset = models.Event.objects.all()
