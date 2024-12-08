

from django import forms
from django.contrib.auth import authenticate


class UserAuthenticationForm(forms.Form):
    username = forms.CharField(
        label='Username',
        max_length=100,
        required=True,
        widget=forms.TextInput(attrs={
            'class': 'form-control',
            'placeholder': 'Username',
            'id': 'username',
        })
    )
    password = forms.CharField(
        label='Password',
        max_length=100,
        required=True,
        widget=forms.PasswordInput(attrs={
            'class': 'form-control',
            'placeholder': 'Password',
            'id': 'password',
        })
    )

    def clean(self):
        cleaned_data = super(UserAuthenticationForm, self).clean()
        username = cleaned_data.get('username')
        password = cleaned_data.get('password')

        if username and password:
            user = authenticate(username=username, password=password)
            if not user:
                raise forms.ValidationError('Invalid username or password')
        return cleaned_data