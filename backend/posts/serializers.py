from rest_framework import serializers
from .models import Post
from mainApp.serializers import ProfileSerializer
class PostSerializer(serializers.ModelSerializer):
    profile = ProfileSerializer(read_only=True)
    class Meta:
        model = Post
        fields = ('id', 'author', 'profile', 'title', 'category', 'body', 'image', 'likes', 'published_date')
class PostCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('title', 'category', 'body', 'image')