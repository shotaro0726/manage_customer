from django.urls import path
from . import views

app_name = 'customers'

urlpatterns = [
    path('api/customers/', views.customers_list, name='list'),
    path('api/customers/<int:pk>/', views.customers_detail, name='detail'),
]