from django.contrib import admin
from shop.models import Category, Product, Review, Cart, CartProducts, Order, OrderProduct

admin.site.register(Category)
admin.site.register(Product)
admin.site.register(Review)
admin.site.register(Cart)
admin.site.register(CartProducts)
admin.site.register(Order)
admin.site.register(OrderProduct)
