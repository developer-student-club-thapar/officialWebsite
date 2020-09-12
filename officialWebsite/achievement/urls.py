from django.urls import path, include
from . import views


urlpatterns = [
    path("", views.AchievementViewset.as_view(), name="achievements"),
]
