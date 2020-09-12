from django.urls import path, include
from . import views

urlpatterns = [
    path("", views.EventViewSet.as_view(), name="events"),
]
