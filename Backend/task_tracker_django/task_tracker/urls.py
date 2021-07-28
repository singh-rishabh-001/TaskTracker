from .api import TaskViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register("api/task", TaskViewSet, 'Tasks')
urlpatterns = router.urls
