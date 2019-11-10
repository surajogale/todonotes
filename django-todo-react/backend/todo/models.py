from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Todo(models.Model):
      title = models.CharField(max_length=120)
      owner = models.ForeignKey(User, related_name="notes", on_delete=models.CASCADE, null=True)
      description = models.TextField()
      completed = models.BooleanField(default=False)

      def _str_(self):
        return self.title