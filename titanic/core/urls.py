from django.urls import path, include
from rest_framework import routers
from core import views


router = routers.DefaultRouter()
router.register('predict', views.TitanicViewSet)
app_name = 'titanic'

urlpatterns = [
    path('', include(router.urls)),
]
