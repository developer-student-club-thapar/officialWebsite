from django.test import TestCase
from officialWebsite.topic.models import Topic


def create_topic():
    return Topic.objects.create(
        name="Test Topic",
    )


class TestTopicModel(TestCase):
    def setUp(self):
        topic_new = create_topic()
        self.topic_new = topic_new

    def test_topic_creation(self):
        """
        Test Topic creation
        """
        # topic_new = create_team()
        self.assertEqual(self.topic_new.name, "Test Topic")
