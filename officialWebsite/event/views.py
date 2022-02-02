from django.shortcuts import render
from . import models
from . import serializers
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.views import APIView
# Create your views here.

class EventViewset(APIView):
    """Manage Events in the database"""
    def get(self, request, format=None):
        events = models.Event.objects.all()
        serializer = serializers.EventSerializer(events, many=True)
        return Response(serializer.data)
