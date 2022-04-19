from rest_framework import viewsets

from api.models.product_model import Product
from api.serializers.product_serializer import ProductSerializer


class ProductView(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
