from rest_framework import serializers
from core import models


class TitanicSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Titanic
        fields = ("pclass", "sex", "age", "sibsq", "parch",
                  "fare", "embarked", "title", "classification")
        extra_kwargs = {"classification": {"read_only": True}}
