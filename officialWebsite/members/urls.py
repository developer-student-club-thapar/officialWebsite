from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

app_name = 'members'
router = DefaultRouter()

router.register('', views.MemberViewset)

urlpatterns = [
    path('', include(router.urls)),
]
