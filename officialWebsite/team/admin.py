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


class TeamAdmin(admin.ModelAdmin):
    inlines = [
        MembershipInline,
    ]
    exclude = ("members",)


admin.site.register(models.Team, TeamAdmin)
