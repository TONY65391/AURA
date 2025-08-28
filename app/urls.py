from django.urls import path
from . import views

urlpatterns = [
    path('', views.home),
    path('home', views.home),
    path('menu', views.menu),
    path('about', views.about),
    path('book_a_table', views.table)
]