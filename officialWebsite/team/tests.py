from django.test import TestCase
from officialWebsite.team.models import Team
from django.contrib.auth import get_user_model


def create_team():
    return Team.objects.create(
        name="Test Team",
    )


def create_user():
    return get_user_model().objects.create_user(name="Test User", email="test@xyz.com")


class TestTeamModel(TestCase):
    def setUp(self):
        team_new = create_team()
        user_new = create_user()
        team_new.user.add(user_new)
        team_new.save()
        self.team_new = team_new

    def test_team_creation(self):
        """
        Test Topic creation
        """
        # topic_new = create_team()
        self.assertEqual(self.team_new.name, "Test Team")
