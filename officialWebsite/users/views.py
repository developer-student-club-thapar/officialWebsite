from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics
from officialWebsite.users.models import User, Year
from officialWebsite.users.serializers import UserSerializer
from rest_framework.permissions import IsAdminUser, IsAuthenticated

class IsSuperUser(IsAdminUser):
    def has_permission(self, request, view):
        return bool(request.user and request.user.is_superuser)

class LeadListView(APIView):
    """List all leads"""

    def get(self, request, format=None):
        # find the max year 
        max_year = Year.objects.all().order_by('-year')[0]
        # get leads for max year
        leads = User.objects.filter(years=max_year, role__iexact="Lead").order_by('name')
        serializer = UserSerializer(leads, many=True)
        return Response(serializer.data)


class CoLeadListView(APIView):
    """List all leads"""

    def get(self, request, format=None):
        # find the max year 
        max_year = Year.objects.all().order_by('-year')[0]

        co_leads = User.objects.all().filter(years=max_year, role__iexact="Co-Lead").order_by("name")
        serializer = UserSerializer(co_leads, many=True)
        return Response(serializer.data)

class UserViewset(APIView):
    """Manage members in the database"""
    def get(self, request, format=None):
        max_year = Year.objects.all().order_by('-year')[0]
        core = User.objects.all().filter(years=max_year, role__iexact="Core").order_by("name")
        serializer = UserSerializer(core, many=True)
        return Response(serializer.data)

class MentorListView(APIView):
    """List all mentors"""

    def get(self, request, format=None):
        # sort by name in ascending order
        max_year = Year.objects.all().order_by('-year')[0]
        mentors = User.objects.all().filter(years=max_year, role__iexact="Mentor").order_by('name')
        serializer = UserSerializer(mentors, many=True)
        return Response(serializer.data)

class YearListView(APIView):
    """List all the years"""
    def get(self, request, format=None):
        years = Year.objects.all().order_by('-year')
        year_data = []
        for year in years:
            tenure = year.get_tenure()
            year_data.append({"tenure": tenure, "link": "https://api.dsctiet.tech/api/members/" + str(year.year) + "/"})
        return Response(year_data)
class YearWiseMembersListView(APIView):
    """List all the years"""
    # get the year from the url
    def get(self, request, year, format=None):
        print(year)
        year = Year.objects.get(year=year)
        # get leads of the year
        members = []
        # leads
        leads = User.objects.all().filter(years=year, role__iexact="Lead").order_by('name')
        serialize = UserSerializer(leads, many=True)
        members.append({
            "role": "Lead",
            "members": serialize.data
        })

        # co-leads
        co_leads = User.objects.all().filter(years=year, role__iexact="Co-Lead").order_by("name")
        serialize = UserSerializer(co_leads, many=True)
        members.append({
            "role": "Co-Lead",
            "members": serialize.data
        })

        # core
        core = User.objects.all().filter(years=year, role__iexact="Core").order_by("name")
        serialize = UserSerializer(core, many=True)
        members.append({
            "role": "Core",
            "members": serialize.data
        })

        # mentors
        mentors = User.objects.all().filter(years=year, role__iexact="Mentor").order_by("name")
        serialize = UserSerializer(mentors, many=True)
        members.append({
            "role": "Mentor",
            "members": serialize.data
        })

        return Response(members)

class UserCreateView(generics.ListCreateAPIView):
    # authenticated
    permission_classes = (IsSuperUser, )

    queryset = User.objects.all()
    serializer_class = UserSerializer

    def perform_create(self, serializer):
        # get the year from form data
        # find year and if not create
        year = Year.objects.get_or_create(year=int(self.request.data['year']))
        print(year)
        year = year[0]
        if year:
            # save year in user
            serializer.save(years=[year])
            