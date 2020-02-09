from django.shortcuts import render
from django.views.generic import ListView, DetailView
from .models import Landlord, Address

class LandlordListView(ListView):
    model = Landlord

class AddressDetailView(DetailView):
    model = Address

