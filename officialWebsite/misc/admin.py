from django.contrib import admin
from . import models

admin.site.register(models.Achievement)
admin.site.register(models.FAQ)
admin.site.register(models.ContactRequest)
admin.site.register(models.Sponsor)

