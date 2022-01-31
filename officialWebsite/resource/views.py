from django.shortcuts import render
from . import models
from . import serializers
from rest_framework import generics
# Create your views here.

class ResourceViewset(generics.ListAPIView):
    queryset = models.Resource.objects.all()
    serializer_class = serializers.ResourceSerializer
