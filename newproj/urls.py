"""newproj URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
from django.conf.urls.static import static
from django.conf import settings
from newres import views
urlpatterns = [
    url(r'^$',views.main,name='main'),
    url(r'^proceed/',views.proceed,name='proceed'),
    #url(r'^/accounts/google/login/?process=login/',views.logged,name='logged'),
    url(r'^admin/', admin.site.urls),
    url(r'^prequesdetails/', views.pre_question_details,name='prequestiondetails'),
    url(r'^postquesdetails/', views.post_question_details,name='postquestiondetails'),
    url(r'^expquesdetails/', views.exp_question_details,name='expquestiondetails'),
    url(r'^placeboquesdetails/', views.placebo_question_details,name='placeboquestiondetails'),
    url(r'^formdata/', views.formdata,name='formdata'),
    url(r'^status/', views.status,name='status'),
    url(r'^grpdiv/', views.grp_div,name='grpdiv'),


]+static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
