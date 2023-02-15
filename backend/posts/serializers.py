from rest_framework import serializers
from .models import ProfileSerializaer
from .models import Post
class PostSerializer(serializers.ModelSerializer):
    proflie = ProfileSerializaer(read_only=True)
    class Meta:
        model = Post
        fields = ('pk', 'profile', 'title', 'body', 'image', 'published_date', 'Likes')
class PostCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('title', 'category', 'body', 'image')