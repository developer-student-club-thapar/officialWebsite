from django.test import TestCase
from django.contrib.auth import get_user_model
from officialWebsite.misc.models import Achievement


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
