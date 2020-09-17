from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

app_name = "contact"
router = DefaultRouter()

router.register("", views.ContactReqViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
