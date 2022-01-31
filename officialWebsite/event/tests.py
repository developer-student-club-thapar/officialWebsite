from django.test import TestCase
import django.utils.timezone as timezone
from datetime import datetime
from officialWebsite.event.models import Event

# Create your tests here.


def create_event():
    return Event.objects.create(
        name="test_event",
        date=datetime.date.now(),
        time=timezone.now(),
        venue="test_location",
        description="test_description",
        title="Test title",
        headline_event=False,
        link="link.com",
        url="link.com",
    )


class TestResourceModel(TestCase):
    def test_create_event(self):
        event = create_event()
        self.assertTrue(isinstance(event, event))
        self.assertEqual(event.__str__(), event.name)
