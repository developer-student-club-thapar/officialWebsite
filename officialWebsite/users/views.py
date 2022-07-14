
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics
from officialWebsite.users.models import User, Year, Position
from officialWebsite.users.serializers import UserSerializer, UserSerializerArchive
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
        try:
            max_year = Year.objects.all().order_by('-year')[0]
        except:
            max_year = None
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
        try:
            year = Year.objects.get(year=year)
        except:
            return Response({"error": "Year not found"}, status=404)
        # get leads of the year
        members = {}
        leads = []
        # get all the leads in the year
        lead_positions = Position.objects.filter(year=year, role__iexact="Lead")
        for lead in lead_positions:
            leads.append(lead.user)
        # sort name
        leads = sorted(leads, key=lambda x: x.name)
        leads_serialized = UserSerializerArchive(leads, many=True)
        members["lead"] = leads_serialized.data

        # coleads 
        coleads = []
        colead_positions = Position.objects.filter(year=year, role__iexact="Co-Lead")
        for colead in colead_positions:
            coleads.append(colead.user)
        coleads.sort(key=lambda x: x.name)
        coleads_serialized = UserSerializerArchive(coleads, many=True)
        members["co-lead"] =  coleads_serialized.data

        # mentors
        mentors = []
        mentor_positions = Position.objects.filter(year=year, role__iexact="Mentor")
        for mentor in mentor_positions:
            mentors.append(mentor.user)
        # sort mentors by name
        mentors.sort(key=lambda x: x.name)
        mentors_serialized = UserSerializerArchive(mentors, many=True)
        members["mentor"] = mentors_serialized.data

        # core
        core = []
        core_positions = Position.objects.filter(year=year, role__iexact="Core")
        for core_member in core_positions:
            core.append(core_member.user)
        core.sort(key=lambda x: x.name)
        core_serialized = UserSerializerArchive(core, many=True)
        members["core"] = core_serialized.data

        return Response(members)
class UserView(APIView):
    # check if authenticated
    permission_classes = (IsAuthenticated,)
    # post request
    def post(self, request, format=None):
        serializer = UserSerializer(data=request.data)
        # create year
        if serializer.is_valid():
            year = Year.objects.get_or_create(year=request.data['year'])
            serializer.save(years=[year[0]])

            user = User.objects.get(email=request.data['email'])
            # create position
            position = Position.objects.create(user=user, role=request.data['role'], year=year[0])        
            position.save()
            return Response(serializer.data)
        else:
            return Response({"message": "Error"})

    # put request
    def put(self, request, format=None):
        # get the user
        user = User.objects.get(email=request.data['email'])
        year = Year.objects.get_or_create(year=request.data['year'])

        if not user:
            return Response({"message": "User not found"})
        # update the user
        user.years.add(year[0])
        user.role = request.data['role']
        user.save()

        # find position with the user and year and delete it
        try:
            if Position.objects.get(user=user, year=year[0]):
                Position.objects.get(user=user, year=year[0]).delete()
        except:
            pass
        # create postition
        position = Position.objects.create(user=user, role=request.data['role'], year=year[0])
        position.save()
        return Response({"message": "User updated"})