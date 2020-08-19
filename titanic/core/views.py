from django.shortcuts import render
from rest_framework import viewsets
from core.serializers import TitanicSerializer
from core.models import Titanic


class TitanicViewSet(viewsets.ModelViewSet):
    serializer_class = TitanicSerializer
    queryset = Titanic.objects.all()
