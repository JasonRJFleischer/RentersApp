from django.db import models

class Landlord(models.Model):
    name = models.CharField(max_length=256)
    
class Address(models.Model):
    address1 = models.CharField(max_length=256)
    address2 = models.CharField(max_length=256)
    address3 = models.CharField(max_length=256)
    zip_code = models.CharField(max_length=256)
    city = models.CharField(max_length=256)
    state = models.CharField(max_length=256)

class Case(models.Model):
    landlord = models.ForeignKey(Landlord, on_delete=models.CASCADE)
    address = models.ForeignKey(Address, on_delete=models.CASCADE)
    case_id = models.CharField(max_length=256)
    filing_date = models.DateField()
    moveout_date = models.DateField()
