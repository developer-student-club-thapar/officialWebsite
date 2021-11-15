from django.test import TestCase
from django.contrib.auth import get_user_model


class UserModelTest(TestCase):
    def test_user_creation(self):
        """
        Test user creation
        """
        user = get_user_model().objects.create_user(
            name="Test User", email="test@xyz.com"
        )
        self.assertEqual(user.name, "Test User")
        self.assertEqual(user.email, "test@xyz.com")
        self.assertTrue(user.is_active)
        self.assertFalse(user.is_staff)
        self.assertFalse(user.is_superuser)

    def test_superuser_creation(self):
        """
        Test superuser creation
        """
        user = get_user_model().objects.create_superuser(
            name="Super User", email="test@xyz.com", password="test123"
        )
        self.assertEqual(user.name, "Super User")
        self.assertEqual(user.email, "test@xyz.com")
        self.assertTrue(user.is_active)
        self.assertTrue(user.is_staff)
        self.assertTrue(user.is_superuser)

    def test_user_creation_with_same_name(self):
        """
        Test user creation with same name
        """
        user1 = get_user_model().objects.create_user(
            name="Test User", email="test1@xyz.com"
        )
        user2 = get_user_model().objects.create_user(
            name="Test User", email="test2@xyz.com"
        )
        self.assertEqual(user1.name, "Test User")
        self.assertEqual(user2.name, "Test User")

    def test_user_creation_with_same_email_raises_error(self):
        """
        Test user creation with same email should raise error
        """
        get_user_model().objects.create_user(name="Test User", email="test@xyz.com")
        with self.assertRaises(Exception):
            get_user_model().objects.create_user(
                name="Test User 2", email="test@xyz.com"
            )
