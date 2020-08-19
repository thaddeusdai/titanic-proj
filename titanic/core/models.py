from django.db import models
import numpy as np
import os
from django.conf import settings
from tensorflow.keras.models import load_model


class Titanic(models.Model):
    pclass = models.IntegerField()
    sex = models.IntegerField()
    age = models.IntegerField()
    sibsq = models.IntegerField()
    parch = models.IntegerField()
    embarked = models.IntegerField()
    fare = models.DecimalField(decimal_places=2, max_digits=10)
    title = models.IntegerField()
    classification = models.CharField(max_length=100, blank=True)

    def save(self, *args, **kwargs):
        fare = float(self.fare)
        data = np.array([[self.pclass, self.sex, self.age, self.sibsq,
                          self.parch, fare, self.embarked, self.title]]).astype(np.float32)
        file_model = os.path.join(
            settings.BASE_DIR, 'ml_model/titanic.h5')
        model = load_model(file_model)
        pred = model.predict(data)
        if pred >= .5:
            self.classification = "You Survived!"
        else:
            self.classification = "You did not Survive!"
        super().save(*args, **kwargs)
