from django import forms

class NewProjectForm(forms.Form):
    name = forms.CharField(label="Name",max_length=200)
    description = forms.CharField(label="Description",widget=forms.Textarea)
    members = forms.CharField(label="Members")
    github_link = forms.URLField(label="Github Links")
    funding = forms.CharField(label="Funding",required=False)
    faculty = forms.CharField(label="Faculty", required=False)
    extra = forms.CharField(label="Extra Remarks",widget=forms.Textarea,required=False)