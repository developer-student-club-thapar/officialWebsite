from django.test import TestCase
from django.contrib.auth import get_user_model
from officialWebsite.projects.models import Project


def sample_user(name="Test User", email="test@gmail.com"):
    """
    Create a sample user
    """
    return get_user_model().objects.create_user(name, email)


class TestProjectModel(TestCase):
    def test_project_creation(self):
        """
        Test project creation
        """
        user = sample_user()
        project = Project.objects.create(
            name="Test Project",
            description="Test Project Description",
        )
        self.assertEqual(project.name, "Test Project")
        self.assertEqual(project.description, "Test Project Description")

    def test_project_leads(self):
        """
        Test many to many relationship of project leads
        """
        lead1 = sample_user(name="Test User 1", email="test1@xyz.com")
        lead2 = sample_user(name="Test User 2", email="test2@xyz.com")
        project = Project.objects.create(
            name="Test Project",
            description="Test Project Description",
        )
        project.project_lead.add(lead1, lead2)
        self.assertEqual(project.project_lead.count(), 2)
        self.assertIn(lead1, project.project_lead.all())
        self.assertIn(lead2, project.project_lead.all())

    def test_project_members(self):
        """
        Test many to many relationship of project members
        """
        member1 = sample_user(name="Test User 1", email="test1@xyz.com")
        member2 = sample_user(name="Test User 2", email="test2@xyz.com")
        project = Project.objects.create(
            name="Test Project",
            description="Test Project Description",
        )
        project.members.add(member1, member2)
        self.assertEqual(project.members.count(), 2)
        self.assertIn(member1, project.members.all())
        self.assertIn(member2, project.members.all())
