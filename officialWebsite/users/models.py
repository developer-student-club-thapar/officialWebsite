import sys
from django.db import models
from django.contrib.auth.models import AbstractBaseUser
from django.core.files.uploadedfile import InMemoryUploadedFile
from PIL import Image
from io import BytesIO
from officialWebsite.users.managers import UserManager


class User(AbstractBaseUser):

    ROLE_CHOICES = (("Lead", "Lead"), ("Core", "Core"), ("Co-Lead", "Co-Lead"))

    name = models.CharField(max_length=255)
    role = models.CharField(max_length=255, choices=ROLE_CHOICES, null=True, blank=True)
    email = models.EmailField(unique=True)
    github_url = models.URLField(blank=True)
    linkedin_url = models.URLField(blank=True)
    twitter_url = models.URLField(blank=True)
    medium_url = models.URLField(blank=True)
    dev_url = models.URLField(blank=True)
    image = models.ImageField(upload_to="profile-images/", blank=True)

    is_staff = models.BooleanField(default=False, null=True)
    is_admin = models.BooleanField(default=False, null=True)
    is_active = models.BooleanField(default=True, null=True)
    is_superuser = models.BooleanField(default=False, null=True)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = [
        "name",
    ]

    objects = UserManager()

    def save(self, *args, **kwargs):
        if not self.id:
            if self.image:
                self.image = self.compressImage(self.image)
                # rename the file
                self.image.name = "{}.jpg".format(self.email)
        super(User, self).save(*args, **kwargs)

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

    def __str__(self):
        return f"{self.name}"

    def get_short_name(self):
        return self.email

    def has_perm(self, perm, obj=None):
        return True

    def has_module_perms(self, app_label):
        return True
