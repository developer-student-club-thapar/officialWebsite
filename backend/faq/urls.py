from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

app_name = 'faq'
router = DefaultRouter()

router.register('', views.FAQViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
