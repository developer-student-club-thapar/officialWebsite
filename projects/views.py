from django.shortcuts import render
from . import models
from . import serializers
from rest_framework import viewsets, status, mixins, generics
from .models import Project
from .forms import NewProjectForm

class ProjectViewSet(viewsets.ModelViewSet):
    """Manage projects in the database"""

    serializer_class = serializers.ProjectSerializer
    queryset = models.Project.objects.all()

def NewProject(request):
    if request.method =='POST':
        form = NewProjectForm(request.POST)
        if form.is_valid():
            name = form.cleaned_data["name"]
            description = form.cleaned_data["description"]
            members = form.cleaned_data["members"]
            github_link = form.cleaned_data["github_link"]
            funding = form.cleaned_data["funding"]
            faculty = form.cleaned_data["faculty"]
            extra = form.cleaned_data["extra"]

            t1 = Project(name=name)
            t1.save()
            t2 = Project(description=description)
            t2.save()
            t3 = Project(members=members)
            t3.save()
            t4 = Project(github_link=github_link)
            t4.save()
            t5 = Project(funding=funding)
            t5.save()
            t6 = Project(faculty=faculty)
            t6.save()
            t7 = Project(extra=extra)
            t7.save()

            return render(request,'templates/newproject.html')

        else:
            return render(request,'templates/newproject.html')
            
    else:
        form = NewProjectForm()

    return render(request, 'newproject.html', {'form': form})

def showProjects(request):
    allProjects = Project.objects.all()
    context = {'allProjects': allProjects}
    return render(request,'templates/allProjects.html',context)