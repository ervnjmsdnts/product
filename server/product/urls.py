from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter

from api.views.product_view import ProductView

router = DefaultRouter()

router.register("products", ProductView, basename="Products")


urlpatterns = [path("admin/", admin.site.urls), path("api/", include(router.urls), name="API Endpoint")]
