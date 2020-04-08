from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

app_name = 'projects'
router = DefaultRouter()

router.register('', views.ProjectViewSet)

urlpatterns = [
    path('newproject/',views.NewProject, name="newproject"),
    path('allprojects/',views.showProjects, name="AllProjects"),
    path('', include(router.urls)),
]
