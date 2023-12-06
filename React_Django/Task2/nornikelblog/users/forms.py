from django import forms


class NameForm(forms.Form):
    first_name = forms.CharField(label="Your name", max_length=100)
    email = forms.CharField(label="Your name", max_length=100)
    password = forms.CharField(label="Your name", max_length=100)