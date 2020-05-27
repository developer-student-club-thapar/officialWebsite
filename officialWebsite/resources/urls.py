from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

app_name = 'resources'
router = DefaultRouter()

router.register('', views.ResourceViewset)

urlpatterns = [
    path('', include(router.urls)),
]
