from .models import Landlord, Address, Case
from django.views.generic import ListView, DetailView, TemplateView
from rest_framework.views import APIView
from rest_framework.response import Response


class LandlordListView(ListView):
    model = Landlord


class AddressDetailView(DetailView):
    model = Address

class LandlordListCreate(APIView):

    def get(self, request, format=None):
        house_num = request.GET.get('house')
        if house_num:
            house_num = r'^' + house_num + r'\s'

        params = {
        "address__zip_code": request.GET.get('zip'),
        "landlord__name__icontains": request.GET.get('name'),
        "address__address1__icontains": request.GET.get('street'),
        "address__address1__iregex": house_num,
        }

        params = {k: v for (k, v) in params.items() if v != ""}

        if params:
            search_results = Case.objects.filter(**params)
        else:
            search_results = Case.objects.all()
        
        data = []
        for case in search_results:
            data.append({
                            "caseID": case.case_id,
                            "address": {
                                "addressLine1": case.address.address1,
                                "addressLine2": case.address.address2,
                                "addressLine3": case.address.address3,
                                "zip": case.address.zip_code,
                                "city": case.address.city,
                                "state": case.address.state
                                },
                            "plaintiff": case.landlord.name,
                            "filingDate": case.filing_date,
                            "moveoutDate": case.moveout_date 
                    })
        return Response(data)

class WelcomePageView(TemplateView):
    template_name = 'landlord_finder/welcome.html'
