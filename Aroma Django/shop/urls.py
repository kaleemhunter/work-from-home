from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('categories/', views.CategoriesList.as_view(), name='CategoryListCreate'),
    path('categories/<int:pk>/', views.CategoriesDetail.as_view(), name='CategoryRUD'),
    path('categories/<int:pk>/products/', views.ProductList.as_view(), name='ProductListCreate'),
    path('categories/<int:pk>/products/<int:pk2>/', views.ProductDetail.as_view(), name='ProductRUD'),
    path('categories/<int:pk>/products/<int:pk2>/reviews/', views.ReviewList.as_view(), name='ReviewsListCreate'),
    path('categories/<int:pk>/products/<int:pk2>/reviews/<int:pk3>/', views.ReviewDetail.as_view(),
         name='ReviewsRUD'),
    path('users/<int:pk>/cart/', views.CartList.as_view(), name='CartListCreate'),
    path('users/<int:pk>/cart/<int:pk2>/', views.CartDetail.as_view(), name='CartRUD'),
    path('users/<int:pk>/order/', views.OrderList.as_view(), name='OrderListCreate'),
    path('users/<int:pk>/order/<int:pk2>/', views.OrderDetail.as_view(), name='OrderRUD'),
]
