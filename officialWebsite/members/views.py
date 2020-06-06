from django.shortcuts import render
from . import models
from . import serializers
from rest_framework import viewsets, status, mixins, generics

# Create your views here.


class MemberViewset(generics.ListAPIViewSet):
    """Manage members in the database"""

    serializer_class = serializers.MemberSerializer
    queryset = models.Member.objects.all()
