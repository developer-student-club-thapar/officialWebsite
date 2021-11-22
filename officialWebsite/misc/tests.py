from django.test import TestCase
from django.contrib.auth import get_user_model
from officialWebsite.misc.models import Achievement, ContactRequest, Sponsor,FAQ
from django.core import mail

mail.outbox = []

def sample_user(name="Test User", email="test@xyz.com"):
    """
    Create a sample user
    """
    return get_user_model().objects.create_user(name, email)


class AchievementModelTest(TestCase):
    def test_create_achievement(self):
        """
        Test achievement creation
        """
        user = sample_user()
        Achievement.objects.create(title="test", sub_title="test")

    def test_create_achievement_with_multiple_members(self):
        """
        Test many to many relationship between achievement and user
        """
        user1 = sample_user(name="test1", email="test1@xyz.com")
        user2 = sample_user(name="test2", email="test2@xyz.com")
        achievement = Achievement.objects.create(title="test", sub_title="test")
        achievement.members.add(user1, user2)
        self.assertEqual(achievement.members.count(), 2)
        self.assertEqual(
            get_user_model()
            .objects.filter(email=user1.email, achievement_members__title="test")
            .count(),
            1,
        )
        self.assertEqual(
            get_user_model()
            .objects.filter(email=user2.email, achievement_members__title="test")
            .count(),
            1,
        )

class TestFAQModel(TestCase):
    def test_FAQ_creation(self):
        user = sample_user()
        FAQ.objects.create(question="Test Question", answer="Test answer")
        self.assertEqual(FAQ.question, "Test Question")
        self.assertEqual(FAQ.answer, "Test answer")


class TestContactModel(TestCase):
    def TestContactCreation(self):
        user= sample_user()
        ContactRequest.objects.create(name="Test Name", email="Test@test.com", message="Test message")
        self.assertEqual(ContactRequest.name, "Test Name")
        self.assertEqual(ContactRequest.email, "Test@test.com")
        self.assertEqual(ContactRequest.message, "Test message")
    def test_send_email(self):
        mail.send_mail(
            'Subject here', 'Here is the message.',
            'from@example.com', [ContactRequest.email],
            fail_silently=False,
        )
        self.assertEqual(len(mail.outbox), 1)
        self.assertEqual(mail.outbox[0].subject, 'Subject here')


class TestSponserModel(TestCase):
    def test_Sponser_creation(self):
        user = sample_user()
        Sponsor.objects.create(name="Test")
        self.assertEqual(Sponsor.name, "Test")

