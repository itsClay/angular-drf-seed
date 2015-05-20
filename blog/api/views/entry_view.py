from rest_framework.generics import ListCreateAPIView
from blog.api.serializers.entry_serializer import EntrySerializer
from blog.models import Entry


class EntryView(ListCreateAPIView):
    serializer_class = EntrySerializer

    def get_queryset(self):
        return Entry.objects.all()