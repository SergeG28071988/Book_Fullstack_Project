from django.urls import path, include
from rest_framework import routers
from .views import BookView

route = routers.DefaultRouter()
route.register(r'books', BookView, basename='bookview')

urlpatterns = [
    path('', include(route.urls)),
]
