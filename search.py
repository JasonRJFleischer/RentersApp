from django.views.generic import FormView


class SearchView(FormView):
    template_name = "search.html"
    success_url = "search_results"
    form_class = SearchForm

    def post(self, request, *args, **kwargs):
    """
    Handle POST requests: instantiate a form instance with the passed
    POST variables and then check if it's valid.
    """
    form = self.get_form()
    form.cleaned
    if form.is_valid():
        return self.form_valid(form)
    else:
        return self.form_invalid(form)
