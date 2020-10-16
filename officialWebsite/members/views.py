from django.shortcuts import render
from . import models
from . import serializers
from rest_framework import viewsets, status, mixins, generics


class MemberViewset(generics.ListAPIView):
    """Manage members in the database"""

    serializer_class = serializers.MemberSerializer
    queryset = models.Member.objects.all().filter(role__icontains="Core")
