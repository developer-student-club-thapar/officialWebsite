from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

app_name = 'sponsor'
router = DefaultRouter()

router.register('', views.SponsorViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
