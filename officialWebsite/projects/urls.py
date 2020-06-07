from django.urls import path, include
from . import views


urlpatterns = [
    path('', views.ProjectViewSet.as_view()),
]
