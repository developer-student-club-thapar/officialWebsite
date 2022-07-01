import sys
from django.db import models
from officialWebsite.topic.models import Topic
from django.core.files.uploadedfile import InMemoryUploadedFile
from PIL import Image
from io import BytesIO
# Create your models here.

class Event(models.Model):
    date = models.DateField()
    end_date = models.DateField(null=True, blank=True)
    time = models.TimeField()
    end_time = models.TimeField(null=True, blank=True)
    venue = models.CharField(max_length=256)
    title = models.CharField(max_length=256)
    info = models.TextField()
    topics = models.ManyToManyField(Topic, blank=True)
    link = models.URLField(max_length=256)
    docs = models.URLField(max_length=256)
    headline_event = models.BooleanField(default=False)
    image = models.ImageField(upload_to="event-images/", blank=True)

    class Meta:
        ordering = ["-date"]

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        if self.image:
            self.image = self.compressImage(self.image)
            # rename the file
            self.image.name = "{}.jpg".format(self.title + "_" + self.venue + "_" + str(self.date))
        super(Event, self).save(*args, **kwargs)

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
