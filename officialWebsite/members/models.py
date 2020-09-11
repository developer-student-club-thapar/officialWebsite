import sys
from django.db import models
from PIL import Image
from io import BytesIO
from django.core.files.uploadedfile import InMemoryUploadedFile
from django import forms
from django.contrib.auth.models import Group
from django.contrib.auth.models import User
from django.core.mail import send_mail


class Member(models.Model):

    ROLE_CHOICES = (('Lead', 'Lead'), ('Core', 'Core'))

    name = models.CharField(max_length=255)
    user = models.ForeignKey(User, related_name='users', on_delete=models.CASCADE)
    role = models.CharField(max_length=255, choices=ROLE_CHOICES)
    email = models.EmailField()
    github_url = models.URLField(blank=True)
    linkedin_url = models.URLField(blank=True)
    twitter_url = models.URLField(blank=True)
    medium_url = models.URLField(blank=True)
    dev_url = models.URLField(blank=True)
    image = models.ImageField(upload_to='profile-images/', blank=True)

    def save(self, *args, **kwargs):
        if not self.id:
            if self.image:
                self.image = self.compressImage(self.image)
        super(Member, self).save(*args, **kwargs)

    def compressImage(self, image):
        imageTemproary = Image.open(image)
        outputIoStream = BytesIO()
        # imageTemproaryResized = imageTemproary.resize((1020, 573))
        imageTemproary.save(outputIoStream, format='JPEG', quality=60)
        outputIoStream.seek(0)
        image = InMemoryUploadedFile(outputIoStream, 'ImageField', "%s.jpg" % image.name.split('.')[0], 'image/jpeg', sys.getsizeof(outputIoStream), None)
        return image

    def __str__(self):
        return self.name


class MemberRegistration(models.Model):
    name = models.CharField(max_length=255)
    username = models.CharField(max_length=50)
    email = models.EmailField()
    github_url = models.URLField(blank=True)
    linkedin_url = models.URLField(blank=True)
    twitter_url = models.URLField(blank=True)
    medium_url = models.URLField(blank=True)
    dev_url = models.URLField(blank=True)
    image = models.ImageField(upload_to='temp-images/', blank=True)

    def save(self, *args, **kwargs):
        password = User.objects.make_random_password(length=10)
        user = User.objects.create_user(username=self.username, email=self.email, password=password, is_staff=True)
        # user.is_staff = True
        group = Group.objects.get(name='members')
        group.user_set.add(user)

        if self.image == '':
            member = Member.objects.create(
                name=self.name,
                user=user,
                email=self.email,
                github_url=self.github_url,
                linkedin_url=self.linkedin_url,
                twitter_url=self.twitter_url,
                medium_url=self.medium_url,
                dev_url=self.dev_url,
                image='default.jpeg',
            )
        else:

            member = Member.objects.create(
                name=self.name,
                user=user,
                email=self.email,
                github_url=self.github_url,
                linkedin_url=self.linkedin_url,
                twitter_url=self.twitter_url,
                medium_url=self.medium_url,
                dev_url=self.dev_url,
                image=self.image,
            )

        send_mail(
            'Member Registration Password',
            f'Hi, {self.name}. Welcome to DSC-TIET. Your username is {self.username} and password is {password}. We recommend to change your password upon login. You can login using https://api.dsctiet.tech/admin',
            'noreplydsctiet@gmail.com',
            [f'{self.email}'],
            fail_silently=False,
        )

        super(MemberRegistration, self).save(*args, **kwargs)  # Call the real save() method

    def __str__(self):
        return self.name
