# from .api import NoteViewSet, RegistrationAPI

from .views import TodoView, RegistrationAPI
from django.urls import path, include  
from rest_framework import routers   
router = routers.DefaultRouter()  

urlpatterns = [
    path("", include(router.urls)),
    path("auth/register/", RegistrationAPI.as_view()),
]