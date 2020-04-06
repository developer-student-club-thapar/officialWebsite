from django.shortcuts import render
from . import models
from . import serializers
from rest_framework import viewsets, status, mixins, generics


class ProjectViewSet(viewsets.ModelViewSet):
    """Manage projects in the database"""

    serializer_class = serializers.ProjectSerializer
    queryset = models.Project.objects.all()

def NewProject(request):
    if request.method =='POST':
        if request.POST.get('name')and request.POST.get('description') and request.POST.get('members') and request.POST.get('github') and request.POST.get('funding') and request.POST.get('faculty') and request.POST.get('extra'):
            project = Project()
            project.name = request.POST.get('name')
            project.description = request.POST.get('description')
            project.members = request.POST.get('members')
            project.github_link = request.POST.get('github')
            project.funding = request.POST.get('funding')
            project.faculty = request.POST.get('faculty')
            project.extra = request.POST.get('extra')
            project.save()

            return render(request,'templates/newproject.html')

        else:
            return render(request,'templates/newproject.html')
            
