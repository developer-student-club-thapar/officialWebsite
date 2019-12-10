from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

app_name = 'team'
router = DefaultRouter()

router.register('', views.TeamViewset)

urlpatterns = [
    path('', include(router.urls)),
]
