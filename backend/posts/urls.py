from django.urls import path
from .views import PostViewSet
from rest_framework import routers
router = routers.SimpleRouter()
router.register('posts', PostViewSet)
urlpatterns = router.urls