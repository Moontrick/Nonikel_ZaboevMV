from django.http import HttpResponseRedirect
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions, status
from .serializers import UserCreateSerializer, UserSerializer
from .forms import NameForm


class RegisterView(APIView):
  def post(self, request):
    data = request.data
    print(data)
    serializer = UserCreateSerializer(data=data)
    
    if not serializer.is_valid():
        print("1")
        return render(request, "index.html", {"form": data})  

    user = serializer.create(serializer.validated_data)
    user = UserSerializer(user)
    print("2")
    print(user)
    # print(user)
    return render(request, "index.html", {"form": user.data})  
    # return Response(user.data, status=status.HTTP_201_CREATED)


class RetrieveUserView(APIView):
  permission_classes = [permissions.IsAuthenticated]

  def get(self, request):
    user = request.user
    user = UserSerializer(user)

    return Response(user.data, status=status.HTTP_200_OK)
  
def index(request):
    return render(request, "index.html")



# def get_name(request):
#     # if this is a POST request we need to process the form data
#     if request.method == "POST":
#         # create a form instance and populate it with data from the request:
#         form = NameForm(request.POST)
#         # check whether it's valid:
#         if form.is_valid():
#             # process the data in form.cleaned_data as required
#             # ...
#             # redirect to a new URL:
#             return HttpResponseRedirect("/thanks/")

#     # if a GET (or any other method) we'll create a blank form
#     else:
#         form = NameForm()

#     return render(request, "index.html", {"form": form})