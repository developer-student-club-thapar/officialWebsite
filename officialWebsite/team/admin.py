from django.contrib import admin
from . import models

# Register your models here.


class MembershipInline(admin.TabularInline):
    model = models.Team.members.through

    verbose_name = "Member"
    verbose_name_plural = "Members"

    def get_queryset(self, request):
        qs = super(MembershipInline, self).get_queryset(request)
        return qs


class HeadInline(admin.TabularInline):
    model = models.Team.heads.through

    verbose_name = "Head"
    verbose_name_plural = "Heads"

    def get_queryset(self, request):
        qs = super(HeadInline, self).get_queryset(request)
        return qs


class TeamAdmin(admin.ModelAdmin):
    inlines = [
        HeadInline,
        MembershipInline,
    ]
    exclude = (
        'heads',
        'members',
    )


admin.site.register(models.Team, TeamAdmin)
