from django.shortcuts import render
from django.contrib.auth import authenticate, login
from django.http import HttpResponseRedirect
from officialWebsite.members.models import Member
from officialWebsite.members.serializers import MemberSerializer
from rest_framework.views import APIView
from rest_framework.response import Response

# from django.contrib.admin.models import LogEntry


def home(request):
    return render(request, "home.html")


def register(request):
    # LogEntry.objects.all().delete()
    user = authenticate(username="member_registrations", password="testpassword")
    login(request, user)
    return HttpResponseRedirect("/admin/")


class LeadListView(APIView):
    """
    List all leads
    """

    def get(self, request, format=None):
        leads = Member.objects.all().filter(role__icontains="Lead")
        serializer = MemberSerializer(leads, many=True)
        return Response(serializer.data)


class CoLeadListView(APIView):
    """
    List all leads
    """

    def get(self, request, format=None):
        leads = Member.objects.all().filter(role__icontains="Co-Lead")
        serializer = MemberSerializer(leads, many=True)
        return Response(serializer.data)
