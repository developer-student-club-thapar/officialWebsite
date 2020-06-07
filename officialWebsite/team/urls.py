from django.urls import path, include
from . import views


urlpatterns = [
    path('', views.TeamViewset.as_view(), name="team"),
]
