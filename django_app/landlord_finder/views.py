from django.shortcuts import render
from django.views.generic import ListView, DetailView
from .models import Landlord, Address
from .serializers import LandlordSerializer
from rest_framework.generics import ListCreateAPIView

class LandlordListView(ListView):
    model = Landlord

class AddressDetailView(DetailView):
    model = Address

class LandlordListCreate(ListCreateAPIView):
    queryset = Landlord.objects.all()
    serializer_class = LandlordSerializer

    # landlord.case_set.all
    # for address in landlord.case_set.all