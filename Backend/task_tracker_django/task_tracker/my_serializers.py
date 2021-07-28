from task_tracker import models
from rest_framework import serializers


class TaskTrackerSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.TaskTracker
        fields = '__all__'
