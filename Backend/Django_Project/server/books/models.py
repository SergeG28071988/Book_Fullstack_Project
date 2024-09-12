from django.db import models

# Create your models here.


class Book(models.Model):
    objects = None
    photo = models.ImageField(upload_to='uploads/images',
                              help_text="Введите фото",
                              verbose_name="Обложка",
                              null=False, blank=False)

    name = models.CharField(max_length=100, help_text="Введите название книги",
                            verbose_name='Название книги', null=False, blank=False)
    description = models.TextField(help_text="Введите описание книги",
                                   verbose_name="Описание книги", null=False, blank=False)
    genre = models.CharField(max_length=100, help_text="Введите жанр книги",
                             verbose_name='Жанр книги', null=False, blank=False)
    price = models.DecimalField(help_text="Введите цену книги",
                                verbose_name="Цена книги", max_digits=10, decimal_places=2)
    author = models.CharField(max_length=100, help_text="Введите автора книги",
                              verbose_name='Автор', null=False, blank=False)

    def __str__(self):
        return f'Наименование: {self.name} Описание: {self.description}'

    class Meta:
        verbose_name = 'Книга'
        verbose_name_plural = 'Книги'