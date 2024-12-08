from django.http import JsonResponse
from django.shortcuts import render
from django.views import View
from asgiref.sync import sync_to_async
from django.contrib.auth.decorators import login_required
from django.contrib.auth.forms import AuthenticationForm


@login_required()
class AccountClaimsView(View):
    view_is_async = True

    @sync_to_async(thread_sensitive=True)
    def get(self, request, *args, **kwargs):
        claims= {
            'name': 'John Doe',
            'email': 'john@net.com',
            'phone': '1234567890'
        }
        response = JsonResponse({ 'claims': claims }, status=200)
        return response 