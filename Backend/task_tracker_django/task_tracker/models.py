from django.db import models

# Create your models here.


class TaskTracker(models.Model):
    taskId = models.BigAutoField(primary_key=True)
    task = models.TextField()
    completed = models.BooleanField(default=False)
    targetDate = models.DateField()

    created_at = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.task

    class Meta:
        db_table = 'TaskTracker'
