from django.contrib.auth.password_validation import validate_password
from django.core import exceptions
from rest_framework import serializers
from django.contrib.auth import get_user_model
from io import BytesIO
from PIL import Image, ImageFilter
from .models import UserNews
from datetime import datetime
User = get_user_model()


class UserCreateSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ('first_name', 'email', 'password')

  def validate(self, data):
    user = User(**data)
    password = data.get('password')

    try:
      validate_password(password, user)
    except exceptions.ValidationError as e:
      serializer_errors = serializers.as_serializer_error(e)
      raise exceptions.ValidationError(
        {'password': serializer_errors['non_field_errors']}
      )

    return data


  def create(self, validated_data):
    user = User.objects.create_user(
      first_name=validated_data['first_name'],
      email=validated_data['email'],
      password=validated_data['password'],
    )

    return user


class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ('first_name', 'email',)

class UserNewsSerializerView(serializers.ModelSerializer):
    class Meta:
        model = UserNews
        fields = ('id', 'user_name', 'user_photo', "date_upload", "news_title", "news_text", "new_blog")

class UserPhotosSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserNews
        fields = ('user_name', 'user_photo')

    def create(self, validated_data):
        date_upload = datetime.now().date()
        user_name_id = validated_data.get('user_name')
        user_photo = validated_data.get('user_photo')
        news_title = validated_data.get('news_title')
        news_text = validated_data.get('news_text')
        new_blog = validated_data.get('new_blog')
        user_photo_instance = UserNews(
            user_name=user_name_id,
            user_photo=user_photo,
            date_upload=date_upload,
            news_title=news_title,
            news_text=news_text,
            new_blog=new_blog

        )
        user_photo_instance.save()
        return user_photo_instance