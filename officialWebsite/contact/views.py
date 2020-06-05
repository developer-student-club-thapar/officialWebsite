from django.shortcuts import render
from . import models
from . import serializers
from rest_framework import viewsets, status, mixins, generics


class ContactReqViewSet(generics.ListAPIView):
    """Manage contact requests in the database"""

    serializer_class = serializers.ContactReqSerializer
    queryset = models.ContactRequest.objects.all()
