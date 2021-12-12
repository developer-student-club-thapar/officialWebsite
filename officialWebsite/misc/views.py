from . import models
from . import serializers
from rest_framework import generics


class AchievementViewset(generics.ListAPIView):
    """Manage Achievements in the database"""

    serializer_class = serializers.AchievementSerializer
    queryset = models.Achievement.objects.all()


class FAQViewset(generics.ListAPIView):
    """Manage Achievements in the database"""
    serializer_class = serializers.FAQSerializer
    queryset = models.FAQ.objects.all()

class ContactRequestViewset(generics.ListAPIView):
    """Manage Achievements in the database"""
    serializer_class = serializers.ContactRequestSerializer
    queryset = models.ContactRequest.objects.all()

class SponserViewset(generics.ListAPIView):
    """Manage Achievements in the database"""
    serializer_class = serializers.SponserSerializer
    queryset = models.Sponsor.objects.all()

