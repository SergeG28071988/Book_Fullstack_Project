from django.contrib import admin
from django.utils.html import format_html

from .models import Book


# Register your models here.

@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    list_display = ('show_photo', 'name', 'description', 'genre', 'price', 'author')
    list_filter = ('name', 'author')
    fields = ['photo', 'show_photo', 'name', 'description', 'genre', ('price', 'author')]
    readonly_fields = ["show_photo"]

    def show_photo(self, obj):
        if obj.photo:
            return format_html(
                f'<img src="{obj.photo.url}" style="max-height: 100px;">')
            # можно и с использованием функции mark_safe
            # return mark_safe(
            # f'<img src="{obj.photo.url}" style="max-height: 100px;">')
        else:
            return "Фото не доступно"

    show_photo.short_description = 'Обложка'
