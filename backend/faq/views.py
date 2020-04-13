from django.shortcuts import render
from . import models
from . import serializers
from rest_framework import viewsets, status, mixins, generics

# Create your views here.


class FAQViewSet(viewsets.ModelViewSet):
    """Manage FAQs in the database"""

    serializer_class = serializers.FAQSerializer
    queryset = models.FAQ.objects.all()
