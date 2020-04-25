from django.db import models

class Customer(models.Model):
    first_name = models.CharField("FirstName", max_length=255)
    last_name = models.CharField("LastName", max_length=255)
    enail = models.EmailField()
    phone = models.CharField(max_length=20)
    address = models.TextField(blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField("Created_At", auto_now_add=True)

    def __str__(self):
        return self.first_name
