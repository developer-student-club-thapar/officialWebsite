"""DSC Backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view({'get':'list'}), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.auth import views as auth_views
from officialWebsite import resource

from officialWebsite.projects import views as project_views
from officialWebsite.users import views as user_views
from officialWebsite.misc import views as misc_views
from officialWebsite.podcast import views as podcast_views
from officialWebsite.event import views as event_views
from officialWebsite.resource import views as resource_views

admin.site.site_header = "Developer Student Club TIET"
admin.site.site_title = "DSC-TIET"
admin.site.index_title = "DSC-TIET"

urlpatterns = [
    path("api/members/", user_views.UserViewset.as_view(), name="members"),
    path("api/leads/", user_views.LeadListView.as_view(), name="leads"),
    path("api/co-leads/", user_views.CoLeadListView.as_view(), name="co-leads"),
    path("api/projects/", project_views.ProjectViewSet.as_view(), name="projects"),
    path("api/achievements/", misc_views.AchievementViewset.as_view(), name="achievements"),
    path("api/podcasts/", podcast_views.PodcastViewset.as_view(), name="podcasts"),
    path("api/events/", event_views.EventViewset.as_view(), name="events"),
    path("api/resources/", resource_views.ResourceViewset.as_view(), name="resources"),
    path(
        "admin/password_reset/",
        auth_views.PasswordResetView.as_view(),
        name="admin_password_reset",
    ),
    path(
        "admin/password_reset/done/",
        auth_views.PasswordResetDoneView.as_view(),
        name="password_reset_done",
    ),
    path(
        "reset/<uidb64>/<token>/",
        auth_views.PasswordResetConfirmView.as_view(),
        name="password_reset_confirm",
    ),
    path(
        "reset/done/",
        auth_views.PasswordResetCompleteView.as_view(),
        name="password_reset_complete",
    ),
    path("admin/", admin.site.urls),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
