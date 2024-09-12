from rest_framework import viewsets
from .models import Book
from .serializers import BookSerializer
from django.shortcuts import render

# Create your views here.


class BookView(viewsets.ModelViewSet):
    serializer_class = BookSerializer

    def get_queryset(self):
        return Book.objects.all()
