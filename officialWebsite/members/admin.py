from django.contrib import admin
from . import models
from django.contrib.auth.models import User
from import_export import resources
from .models import Member
from import_export.admin import ImportExportModelAdmin


# Register your models here.
class MemberResource(resources.ModelResource):
    class Meta:
        model = Member


class MemberAdmin(ImportExportModelAdmin):
    list_display = ("name", "email")
    resource_class = MemberResource

    def get_queryset(self, request):
        queryset = super().get_queryset(request)
        if not self.has_view_or_change_permission(request):
            queryset = queryset.none()

        for obj in queryset:
            self.has_change_permission(request, obj=obj)
        return queryset

    def has_change_permission(self, request, obj=None):
        if User.objects.get(username=request.user.username).is_superuser:
            return True
        elif obj == None:
            return False
        elif obj.user == request.user:
            self.readonly_fields = ["user", "role"]
            return True
        else:
            return False


admin.site.register(Member, MemberAdmin)
admin.site.register(models.MemberRegistration)
