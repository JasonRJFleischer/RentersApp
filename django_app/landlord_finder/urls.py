from django.urls import path
from . import views

urlpatterns = [
    path('api/landlords/', views.LandlordListCreate.as_view() ),
]