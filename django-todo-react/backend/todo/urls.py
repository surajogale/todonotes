from rest_framework import routers
from .view import TodoView

router = routers.DefaultRouter()
router.register('api/Todo', TodoView, 'Todo')