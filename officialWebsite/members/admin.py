from django.contrib import admin
from . import models
from django.contrib.auth.models import User

# Register your models here.


class MemberAdmin(admin.ModelAdmin):

    readonly_fields = []

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


admin.site.register(models.Member, MemberAdmin)
admin.site.register(models.MemberRegistration)
