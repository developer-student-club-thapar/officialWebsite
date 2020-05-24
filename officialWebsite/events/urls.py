from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

app_name = 'events'
router = DefaultRouter()

router.register('', views.EventViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
