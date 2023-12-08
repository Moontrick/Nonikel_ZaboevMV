from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions, status
from .serializers import UserCreateSerializer, UserSerializer, UserPhotosSerializer
from .models import UserNews

class RegisterView(APIView):
  def post(self, request):
    data = request.data

    serializer = UserCreateSerializer(data=data)

    if not serializer.is_valid():
      return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    user = serializer.create(serializer.validated_data)
    user = UserSerializer(user)

    return Response(user.data, status=status.HTTP_201_CREATED)


class RetrieveUserView(APIView):
  permission_classes = [permissions.IsAuthenticated]

  def get(self, request):
    user = request.user
    user = UserSerializer(user)

    return Response(user.data, status=status.HTTP_200_OK)
  
class UserNewsView(APIView):
    permission_classes = [permissions.IsAuthenticated]
    def post(self, request):
        data = request.data
        serializer = UserPhotosSerializer(data=data)

        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        user_photo_instance = serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    
    # def get(self, request):
    #     user_photos = UserPhotos.objects.filter(user_name=request.user)
    #     serializer = UserPhotosSerializerView(user_photos, many=True)
    #     return Response(serializer.data, status=status.HTTP_200_OK)
       
