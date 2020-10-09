from . import models
from . import serializers
from . import views
import csv

# import django-import-export
# from django.http import HttpResponse
from django.shortcuts import render, HttpResponse
from rest_framework import viewsets, status, mixins, generics


def download_csv(request, queryset):
    #   if not request.user.is_staff:
    # raise PermissionDenied

    model = queryset.model
    model_fields = model._meta.fields + model._meta.many_to_many
    field_names = [field.name for field in model_fields]

    response = HttpResponse(content_type="text/csv")
    response["Content-Disposition"] = 'attachment; filename="export.csv"'

    # the csv writer
    writer = csv.writer(response, delimiter=",")
    # Write a first row with header information
    writer.writerow(field_names)
    # Write data rows
    for row in queryset:
        values = []
        for field in field_names:
            value = getattr(row, field)
            if callable(value):
                try:
                    value = value() or ""
                except SystemExit:
                    value = "Error retrieving value"
            if value is None:
                value = ""
            values.append(value)
        writer.writerow(values)
    return response
