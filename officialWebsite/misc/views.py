from . import models
from . import serializers
from rest_framework import generics
from rest_framework import Response
from rest_framework.views import APIView


class AchievementViewset(APIView):
    """Manage Achievements in the database"""
    def get(self, request, format=None):
        achievements = models.Achievement.objects.all()
        serializer = serializers.AchievementSerializer(achievements, many=True)
        return Response(serializer.data)


class FAQViewset(APIView):
    """Manage Achievements in the database"""
    def get(self, request, format=None):
        faqs = models.FAQ.objects.all()
        serializer = serializers.FAQSerializer(faqs, many=True)
        return Response(serializer.data)

class ContactRequestViewset(APIView):
    """Manage Achievements in the database"""
    def get(self, request, format=None):
        contact_requests = models.ContactRequest.objects.all()
        serializer = serializers.ContactRequestSerializer(contact_requests, many=True)
        return Response(serializer.data)

class SponserViewset(APIView):
    """Manage Achievements in the database"""
    def get(self, request, format=None):
        sponsers = models.Sponser.objects.all()
        serializer = serializers.SponserSerializer(sponsers, many=True)
        return Response(serializer.data)

