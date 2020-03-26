from django.shortcuts import get_object_or_404
from rest_framework import serializers
from .models import Category, Product, Review, Cart, Order, OrderProduct, CartProducts
from django.contrib.auth.models import User
from django.core.exceptions import ValidationError


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name']


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'name', 'description', 'price', 'availability', 'created', 'updated', 'category']
        depth = 1

    def create(self, validated_data):
        category_id = self.context['category_id']
        instance = get_object_or_404(Category, pk=category_id)
        validated_data['category'] = instance
        return Product.objects.create(**validated_data)


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ['id', 'review_comment', 'review_stars', 'created', 'updated', 'product', 'user']
        depth = 1

    def create(self, validated_data):
        product_id = self.context['product_id']
        user_id = self.initial_data.get('user')
        instance_user = get_object_or_404(User, pk=user_id)
        instance_product = get_object_or_404(Product, pk=product_id)
        validated_data['product'] = instance_product
        validated_data['user'] = instance_user
        return Review.objects.create(**validated_data)


class CartSerializer(serializers.ModelSerializer):
    class Meta:
        model = CartProducts
        fields = ['id', 'cart', 'product', 'quantity', 'added']
        depth = 1

    def create(self, validated_data):
        user_id = self.context['user_id']
        instance_user = get_object_or_404(User, pk=user_id)
        try:
            cart = Cart.objects.get(user=instance_user)
        except Cart.DoesNotExist:
            cart = Cart.objects.create(user=instance_user)
        product_id = self.initial_data.get('product')
        instance_product = get_object_or_404(Product, pk=product_id)
        return CartProducts.objects.create(cart=cart, product=instance_product, **validated_data)


# class OrderProductSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = OrderProduct
#         fields = ['products', 'quantity']


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ['id', 'user', 'orderproduct', 'shipping_address', 'status', 'total_bill']
        depth = 2

    def create(self, validated_data):
        user_id = self.context['user_id']
        instance_user = get_object_or_404(User, pk=user_id)
        try:
            cart = Cart.objects.get(user=instance_user)
        except Cart.DoesNotExist:
            raise ValidationError("Your cart is empty, add products in cart first!")
        total_bill = 0
        cart_products = CartProducts.objects.filter(cart=cart)
        for x in cart_products:
            product_price = int(x.quantity) * int(x.product.price)
            total_bill = total_bill + product_price

        order_instance = Order.objects.create(user=instance_user, total_bill=total_bill, **validated_data)

        for x in cart_products:
            product_instance = x.product
            product_quantity = x.quantity
            OrderProduct.objects.create(order=order_instance, product=product_instance, quantity=product_quantity)

        return order_instance
