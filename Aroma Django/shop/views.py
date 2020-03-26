from django.shortcuts import render
from rest_framework import generics

from django.shortcuts import get_object_or_404
from .models import Category, Cart, Product, Review, Order
from django.contrib.auth.models import User
from django.http import Http404, HttpResponse
from django.http import JsonResponse
from django.core import serializers
from .serializers import CategorySerializer, ProductSerializer, ReviewSerializer, CartSerializer, OrderSerializer, CartProducts
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


class CategoriesList(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class CategoriesDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class ProductList(APIView):
    def get(self, request, pk):
        products = Product.objects.filter(category=pk)
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)

    def post(self, request, pk):
        serializer = ProductSerializer(data=request.data, context={'category_id': pk})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ProductDetail(APIView):
    def get_object(self, pk, pk2):
        try:
            category = Category.objects.get(pk=pk)
            return Product.objects.get(pk=pk2, category=category)
        except Product.DoesNotExist:
            raise Http404

    def get(self, request, pk, pk2):
        product = self.get_object(pk, pk2)
        serializer = ProductSerializer(product)
        return Response(serializer.data)

    def put(self, request, pk, pk2):
        product = self.get_object(pk, pk2)
        serializer = ProductSerializer(product, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, pk2):
        product = self.get_object(pk, pk2)
        product.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class ReviewList(APIView):
    def get_object(self, pk, pk2):
        try:
            return Review.objects.filter(product__category_id=pk, product=pk2)
        except Review.DoesNotExist:
            raise Http404

    def get(self, request, pk, pk2):
        reviews = self.get_object(pk, pk2)
        serializer = ReviewSerializer(reviews, many=True)
        return Response(serializer.data)

    def post(self, request, pk, pk2):
        print(request.data)
        serializer = ReviewSerializer(data=request.data, context={'product_id': pk2})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ReviewDetail(APIView):
    def get_object(self, pk, pk2, pk3):
        try:
            return Review.objects.get(product__category_id=pk, product=pk2, pk=pk3)
        except Review.DoesNotExist:
            raise Http404

    def get(self, request, pk, pk2, pk3):
        review = self.get_object(pk, pk2, pk3)
        serializer = ReviewSerializer(review)
        return Response(serializer.data)

    def put(self, request, pk, pk2, pk3):
        review = self.get_object(pk, pk2, pk3)
        serializer = ReviewSerializer(review, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, pk2, pk3):
        product = self.get_object(pk, pk2, pk3)
        product.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class CartList(APIView):
    def get(self, request, pk):
        cart = Cart.objects.get(user_id=pk)
        cart_products = CartProducts.objects.filter(cart=cart)
        serializer = CartSerializer(cart_products, many=True)
        return Response(serializer.data)

    def post(self, request, pk):
        serializer = CartSerializer(data=request.data, context={'user_id': pk})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CartDetail(APIView):
    def get_object(self, pk, pk2):
        try:
            instance_user = User.objects.get(pk=pk)
            instance_cart = Cart.objects.get(user=instance_user)
            return CartProducts.objects.get(cart=instance_cart, pk=pk2)
        except Product.DoesNotExist:
            raise Http404

    def get(self, request, pk, pk2):
        cart = self.get_object(pk, pk2)
        serializer = CartSerializer(cart)
        return Response(serializer.data)

    def put(self, request, pk, pk2):
        cart = self.get_object(pk, pk2)
        serializer = CartSerializer(cart, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, pk2):
        cart = self.get_object(pk, pk2)
        cart.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class OrderList(APIView):
    def get(self, request, pk):
        orders = Order.objects.filter(user_id=pk)
        serializer = OrderSerializer(orders, many=True)
        return Response(serializer.data)

    def post(self, request, pk):
        serializer = OrderSerializer(data=request.data, partial=True, context={'user_id': pk})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class OrderDetail(APIView):
    def get_object(self, pk, pk2):
        try:
            user_id = User.objects.get(pk=pk)
            return Order.objects.get(pk=pk2, user=user_id)
        except Order.DoesNotExist:
            raise Http404

    def get(self, request, pk, pk2):
        order = self.get_object(pk, pk2)
        serializer = OrderSerializer(order)
        return Response(serializer.data)

    def put(self, request, pk, pk2):
        order = self.get_object(pk, pk2)
        serializer = OrderSerializer(order, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, pk2):
        order = self.get_object(pk, pk2)
        order.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
