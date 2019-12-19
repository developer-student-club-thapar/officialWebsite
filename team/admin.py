from django.contrib import admin
from . import models
# Register your models here.


class MembershipInline(admin.TabularInline):
    model = models.Team.members.through

    def get_queryset(self, request):
        qs = super(MembershipInline, self).get_queryset(request)
        return qs


class HeadAdmin(admin.ModelAdmin):
    inlines = [
        MembershipInline,
    ]


class TeamAdmin(admin.ModelAdmin):
    inlines = [
        MembershipInline,
    ]
    exclude = ('members',)


admin.site.register(models.Team, TeamAdmin)
