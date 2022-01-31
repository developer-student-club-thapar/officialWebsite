from django.shortcuts import render
from . import models
from . import serializers
from rest_framework import generics
# Create your views here.

class EventViewset(generics.ListAPIView):
    queryset = models.Event.objects.all()
    serializer_class = serializers.EventSerializer