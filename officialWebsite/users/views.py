from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics
from officialWebsite.users.models import User
from officialWebsite.users.serializers import UserSerializer


class LeadListView(APIView):
    """List all leads"""

    def get(self, request, format=None):
        leads = User.objects.all().filter(role__iexact="Lead").order_by("name")
        serializer = UserSerializer(leads, many=True)
        return Response(serializer.data)


class CoLeadListView(APIView):
    """List all leads"""

    def get(self, request, format=None):
        leads = User.objects.all().filter(role__icontains="Co-Lead").order_by("name")
        serializer = UserSerializer(leads, many=True)
        return Response(serializer.data)

class UserViewset(APIView):
    """Manage members in the database"""
    def get(self, request, format=None):
        core = User.objects.all().filter(role__icontains="Core").order_by('name')
        serializer = UserSerializer(core, many=True)
        return Response(serializer.data)

class MentorListView(APIView):
    """List all mentors"""

    def get(self, request, format=None):
        # sort by name in ascending order
        mentors = User.objects.all().filter(role__icontains="Mentor").order_by('name')
        serializer = UserSerializer(mentors, many=True)
        return Response(serializer.data)

# create user
class UserCreateView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def perform_create(self, serializer):
        serializer.save()