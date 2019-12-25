from django.db import models
from django.core.mail import send_mail
# Create your models here.


class ContactRequest(models.Model):

    name = models.CharField(max_length=255)
    email = models.EmailField()
    message = models.TextField()

    def save(self, *args, **kwargs):
        send_mail(
            'Contact Request',
            f'Hi, {self.name}. We have received your request. You will be contacted shortly',
            'noreplydsctiet@gmail.com',
            [f'{self.email}'],
            fail_silently=False,
        )

        send_mail(
            'New Contact request',
            f'A new contact request has been received from {self.name} ({self.email}). Please check out at https://dsctiet.pythonanywhere.com/admin',
            'noreplydsctiet@gmail.com',
            [f'dsctiet@gmail.com'],
            fail_silently=False,
        )

        super(ContactRequest, self).save(*args, **kwargs)

    def __str__(self):
        return self.email
