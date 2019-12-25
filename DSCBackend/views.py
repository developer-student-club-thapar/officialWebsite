from django.shortcuts import render
from django.contrib.auth import authenticate, login
from django.http import HttpResponseRedirect
# from django.contrib.admin.models import LogEntry




def home(request):
    return render(request, 'home.html')


def register(request):
    # LogEntry.objects.all().delete()
    user = authenticate(username='member_registrations',
                        password='testpassword')
    login(request, user)
    return HttpResponseRedirect("/admin/")
