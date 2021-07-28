from task_tracker import models, my_serializers

from rest_framework import viewsets, permissions, status
from rest_framework.response import Response
from .models import TaskTracker

# Task View Set


class TaskViewSet(viewsets.ModelViewSet):
    queryset = TaskTracker.objects.all().order_by(
        'completed', '-taskId', 'targetDate')
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = my_serializers.TaskTrackerSerializer
