from django.db import models


class Product(models.Model):
    name = models.CharField(max_length=255)
    retail_price = models.FloatField()
    sale_price = models.FloatField()
    quantity = models.IntegerField()
    date_added = models.DateTimeField(auto_now_add=True)
    date_modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
