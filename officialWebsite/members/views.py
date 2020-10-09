from django.shortcuts import render, HttpResponse
from . import models
from . import serializers
from . import utils
from rest_framework import viewsets, status, mixins, generics
from .utils import download_csv

# Create your views here.
def export_csv(request):
    # Create the HttpResponse object with the appropriate CSV header.
    data = download_csv(request, models.objects.all())
    response = HttpResponse(data, content_type="text/csv")
    return response


class MemberViewset(generics.ListAPIView):
    """Manage members in the database"""

    serializer_class = serializers.MemberSerializer
    queryset = models.Member.objects.all().filter(role__icontains="Core")
