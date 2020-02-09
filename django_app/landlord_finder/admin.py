from django.contrib import admin

# Register your models here.
from .models import Landlord, Address, Case

admin.site.register(Landlord)
admin.site.register(Address)
admin.site.register(Case)