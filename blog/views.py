from django.shortcuts import render

# Create your views here.
def angular(request):
    return render(request, 'base.html')