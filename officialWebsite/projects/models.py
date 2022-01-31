from django.db import models
from officialWebsite.users.models import User
from PIL import Image
from io import BytesIO
from django.core.files.uploadedfile import InMemoryUploadedFile
import sys

class Project(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    project_lead = models.ManyToManyField(User, related_name="leads")
    image = models.ImageField(upload_to="project-images/", blank=True)
    members = models.ManyToManyField(User, related_name="members")
    github_link = models.URLField()
    funding = models.CharField(max_length=255, blank=True)
    faculty = models.CharField(max_length=255, blank=True)
    extra = models.TextField(blank=True)

    def __str__(self):
        return self.name
    
    def save(self, *args, **kwargs):
        if self.image:
            self.image = self.compressImage(self.image)
            # rename the file
            self.image.name = "{}.jpg".format(self.github_link.split("/")[-1].strip("/"))
        super(Project, self).save(*args, **kwargs)

    def compressImage(self, image):
        imageTemporary = Image.open(image)
        outputIoStream = BytesIO()
        imageTemporary.save(outputIoStream, format="JPEG", quality=60)
        outputIoStream.seek(0)
        image = InMemoryUploadedFile(
            outputIoStream,
            "ImageField",
            "%s.jpg" % image.name.split(".")[0],
            "image/jpeg",
            sys.getsizeof(outputIoStream),
            None,
        )
        return image
