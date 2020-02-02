from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

app_name = 'achievement'
router = DefaultRouter()

router.register('', views.AchievementViewset)

urlpatterns = [
    path('', include(router.urls)),
]
