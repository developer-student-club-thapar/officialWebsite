from django import forms
from members.models import Member

class NewProjectForm(forms.Form):
    name = forms.CharField(label="Name",max_length=255)
    description = forms.CharField(label="Description",widget=forms.Textarea)
    members = forms.ModelMultipleChoiceField(label="Members",queryset=Member.objects.all())
    github_link = forms.URLField(label="Github Links")
    funding = forms.CharField(label="Funding",required=False,max_length=255,empty_value=None)
    faculty = forms.CharField(label="Faculty", required=False,max_length=255,empty_value=None)
    extra = forms.CharField(label="Extra Remarks",widget=forms.Textarea,required=False,empty_value=None)