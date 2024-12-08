
from django.contrib import admin
from django.urls import path
from . import views
from django.contrib.auth.views import LoginView

app_name = 'account'

urlpatterns = [
    path('login/', view=LoginView.as_view(template_name='account/login.html', success_url='/'), name='login'),
    path('claims/', view=views.AccountClaimsView, name='claims'),
]