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
from django.conf.urls import url, include
from django.contrib import admin
from django.conf.urls.static import static
from django.conf import settings
from main import views
from django.contrib.auth import views as auth_views

urlpatterns = [

    url(r'^$',views.main,name='main'),
    url(r'^logout_view/',views.logout_view,name='logout_view'),

    url(r'^admin_page/',views.admin_page,name='admin_page'),

    url(r'^admin_page_details/',views.admin_page_details,name='admin_page_details'),

    url(r'^admin_db/',views.admin_db,name='admin_db'),

    url(r'^proceed/',views.proceed,name='proceed'),
    url(r'^accounts/', include('allauth.urls')),
    url(r'^admin/', admin.site.urls),

    url(r'^pre_cat/', views.pre_cat,name='pre_cat'),
    url(r'^status/', views.status,name='status'),
    url(r'^prepos_details/', views.prepos_details,name='prepos_details'),
    url(r'^ans_ques/', views.ans_ques,name='ans_ques'),
    
    url(r'^formdata/', views.formdata,name='formdata'),
    url(r'^status/', views.status,name='status'),


]+static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
