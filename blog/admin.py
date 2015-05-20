from django.contrib import admin
from blog.models import Entry
from blog.models import Tag


# This lets us view the Entry and Tag model in the admin panel
admin.site.register(Entry)
admin.site.register(Tag)