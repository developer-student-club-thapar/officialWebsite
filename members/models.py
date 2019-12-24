import sys
from django.db import models
from PIL import Image
from io import BytesIO
from django.core.files.uploadedfile import InMemoryUploadedFile


class Member(models.Model):

    name = models.CharField(max_length=255)
    role = models.CharField(max_length=255, blank=True)
    github_url = models.URLField(blank=True)
    linkedin_url = models.URLField(blank=True)
    twitter_url = models.URLField(blank=True)
    medium_url = models.URLField(blank=True)
    dev_url = models.URLField(blank=True)
    image = models.ImageField(upload_to='profile-images/', blank=True)

    def save(self, *args, **kwargs):
        if not self.id:
            self.image = self.compressImage(self.image)
        super(Member, self).save(*args, **kwargs)

    def compressImage(self, image):
        imageTemproary = Image.open(image)
        outputIoStream = BytesIO()
        # imageTemproaryResized = imageTemproary.resize((1020, 573))
        imageTemproary.save(outputIoStream, format='JPEG', quality=60)
        outputIoStream.seek(0)
        image = InMemoryUploadedFile(outputIoStream, 'ImageField', "%s.jpg" % image.name.split('.')[
            0], 'image/jpeg', sys.getsizeof(outputIoStream), None)
        return image

    def __str__(self):
        return self.name
