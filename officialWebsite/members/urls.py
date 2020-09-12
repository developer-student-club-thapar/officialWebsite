from django.urls import path, include
from . import views


urlpatterns = [
    path("", views.MemberViewset.as_view(), name="members"),
]
