from django.db import models
from django.contrib.auth.models import User


class Category(models.Model):
    name = models.CharField(max_length=25)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class Product(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(max_length=1000)
    price = models.CharField(max_length=15)
    availability = models.BooleanField(default=True)
    category = models.ForeignKey(Category, related_name='products', on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class Review(models.Model):
    review_comment = models.TextField(max_length=1000)
    review_stars = models.CharField(max_length=1)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now_add=True)
    product = models.ForeignKey(Product, related_name='reviews', on_delete=models.CASCADE)
    user = models.ForeignKey(User, related_name='reviews', on_delete=models.CASCADE)

    def __str__(self):
        return self.review_comment


class Cart(models.Model):
    user = models.OneToOneField(User, related_name='cart', on_delete=models.CASCADE)
    added = models.DateTimeField(auto_now_add=True)
    cartproducts = models.ManyToManyField(Product, through='CartProducts')

    def __str__(self):
        return self.user.username


class CartProducts(models.Model):
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE, related_name='cartproduct')
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.CharField(max_length=5)
    added = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.product.name


class Order(models.Model):
    user = models.ForeignKey(User, related_name='orders', default=1, on_delete=models.CASCADE)
    orderproduct = models.ManyToManyField(Product, through='OrderProduct')
    shipping_address = models.CharField(max_length=100)
    status = models.CharField(max_length=10, default='Pending')
    total_bill = models.CharField(max_length=10, default='0')
    transaction_id = models.CharField(max_length=10, default='0')  # ONE-TO-ONE with Payments Table ID

    def __str__(self):
        return self.user.username


class OrderProduct(models.Model):
    order = models.ForeignKey(Order, related_name='orderproducts', on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.CharField(max_length=5)
    added = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.product.name
