from django.shortcuts import render, redirect
from django.template import loader
from django.http import HttpResponse


# Create your views here.

def home(request):
    template = loader.get_template('index.html')
    return HttpResponse(template.render(request = request))

def menu(request):
    template = loader.get_template('menu.html')
    return HttpResponse(template.render(request = request))

def about(request):
    template = loader.get_template('about.html')
    return HttpResponse(template.render(request = request))

def table(request):
    template = loader.get_template('book_a_table.html')
    return HttpResponse(template.render(request = request))