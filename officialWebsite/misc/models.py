from django.db import models
from officialWebsite.users.models import User
from django.core.mail import send_mail



class Achievement(models.Model):
    title = models.CharField(max_length=255, blank=False)
    sub_title = models.CharField(max_length=255, blank=False)
    content = models.TextField()
    members = models.ManyToManyField(
        User, related_name="achievement_members", blank=True
    )

    def __str__(self):
        return self.title


class FAQ(models.Model):

    question = models.CharField(max_length=255)
    answer = models.TextField()

    def __str__(self):
        return self.question

class ContactRequest(models.Model):

    name = models.CharField(max_length=255)
    email = models.EmailField()
    message = models.TextField()

    def save(self, *args, **kwargs):
        send_mail(
            "Contact Request",
            f"Hi, {self.name}. We have received your request. You will be contacted shortly",
            "noreplydsctiet@gmail.com",
            [f"{self.email}"],
            fail_silently=True,
        )

        send_mail(
            "New Contact request",
            f"A new contact request has been received from {self.name} ({self.email}). Please check out at https://api.dsctiet.tech/admin",
            "noreplydsctiet@gmail.com",
            [f"dsctiet@gmail.com"],
            fail_silently=True,
        )

        super(ContactRequest, self).save(*args, **kwargs)

    def __str__(self):
        return self.email


class Sponsor(models.Model):

    name = models.CharField(max_length=255)
    image = models.ImageField(upload_to="sponsor-images/", blank=True)
    url = models.URLField()

    def __str__(self):
        return self.name
