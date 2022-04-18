from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics
from officialWebsite.users.models import User, Year
from officialWebsite.users.serializers import UserSerializer


class LeadListView(APIView):
    """List all leads"""

    def get(self, request, format=None):
        # find the max year 
        max_year = Year.objects.all().order_by('-year')[0]
        # get leads for max year
        leads = User.objects.filter(year=max_year, role__iexact="Lead").order_by('name')
        serializer = UserSerializer(leads, many=True)
        return Response(serializer.data)


class CoLeadListView(APIView):
    """List all leads"""

    def get(self, request, format=None):
        # find the max year 
        max_year = Year.objects.all().order_by('-year')[0]

        co_leads = User.objects.all().filter(year=max_year, role__iexact="Co-Lead").order_by("name")
        serializer = UserSerializer(co_leads, many=True)
        return Response(serializer.data)

class UserViewset(APIView):
    """Manage members in the database"""
    def get(self, request, format=None):
        max_year = Year.objects.all().order_by('-year')[0]
        core = User.objects.all().filter(year=max_year, role__iexact="Core").order_by("name")
        serializer = UserSerializer(core, many=True)
        return Response(serializer.data)

class MentorListView(APIView):
    """List all mentors"""

    def get(self, request, format=None):
        # sort by name in ascending order
        max_year = Year.objects.all().order_by('-year')[0]
        mentors = User.objects.all().filter(year=max_year, role__iexact="Mentor").order_by('name')
        serializer = UserSerializer(mentors, many=True)
        return Response(serializer.data)

# create user
class UserCreateView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def perform_create(self, serializer):
        serializer.save()