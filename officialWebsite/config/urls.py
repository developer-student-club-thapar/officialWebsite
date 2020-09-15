"""DSCBackend URL Configuration

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
from . import views
from django.contrib.auth import views as auth_views

admin.site.site_header = "Developer Student Club TIET"
admin.site.site_title = "DSC-TIET"
admin.site.index_title = "DSC-TIET"

urlpatterns = [
    path("", views.home, name="home"),
    path("register/", views.register, name="register"),
    path("admin/", admin.site.urls),
    path("api/members/", include("officialWebsite.members.urls")),
    path("api/team/", include("officialWebsite.team.urls")),
    path("api/achievements/", include("officialWebsite.achievement.urls")),
    path("api/events/", include("officialWebsite.events.urls")),
    path("api/projects/", include("officialWebsite.projects.urls")),
    path("api/faq/", include("officialWebsite.faq.urls")),
    path("api/sponsor/", include("officialWebsite.sponsor.urls")),
    path("api/contactus/", include("officialWebsite.contact.urls")),
    path("api/resources/", include("officialWebsite.resources.urls")),
    path("api/leads/", views.LeadListView.as_view()),
    path("api/co-leads/", views.CoLeadListView.as_view()),
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
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
