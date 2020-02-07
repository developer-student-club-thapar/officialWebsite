from django.contrib import admin
from . import models


class TopicInline(admin.TabularInline):
    model = models.Event.topics.through

    verbose_name = "Topic"
    verbose_name_plural = "Topics"

    def get_queryset(self, request):
        qs = super(TopicInline, self).get_queryset(request)
        return qs


class EventAdmin(admin.ModelAdmin):
    inlines = [
        TopicInline,
    ]
    exclude = ('topics',)


admin.site.register(models.Event, EventAdmin)
admin.site.register(models.Topic)
