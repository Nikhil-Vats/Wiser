from __future__ import unicode_literals
from django.shortcuts import render
from django.views.generic import View,ListView
from django.http import JsonResponse
from main.models import Userdata,Question,Answer
import json
from django.contrib.auth.models import User
import datetime as dt
from django.contrib.auth.decorators import login_required

def main(request):
    return render(request, 'index.html',)

@login_required
def proceed(request):
    return render(request,'loggedIn.html',)

@login_required
def formdata(request):
    data_get = json.loads(request.body.decode('utf-8'))
    Userdata.objects.create(user_id = request.user,
                            name=data_get['name'],
                            age=data_get['age'],
                            gender=data_get['gender'],
                            contactno=data_get['phone'],
                            education_level=data_get['year'])
    return JsonResponse({"success":1})

@login_required
def pre_cat(request):
    data_get = json.loads(request.body.decode('utf-8'))
    ud = Userdata.objects.get(user_id = request.user)
    ud.category = data_get['category']
    ud.save()
    return JsonResponse({"success":1})    

@login_required
def status(request):
    try:
        ud = Userdata.objects.get(user_id = request.user)
        st = ud.status
        cat = ud.category
    except(Userdata.DoesNotExist,TypeError,ValueError,OverflowError):
        st = 0
        cat = -1

    data = {"stage":st,"category":cat}
    return JsonResponse(data)
    
@login_required
def prepos_details(request):
    if request.method=='POST':
        ud = Userdata.objects.get(user_id = request.user)

        qlist = Question.objects.none()

        if ud.status == 1: 
            qlist = Question.objects.filter(q_category=ud.category,q_type='prepos')
        elif ud.status == 2 and ud.email_date<=dt.date.today():
            qlist = Question.objects.filter(q_category=ud.category,q_type='experiment')
        elif ud.status == 3:
            qlist = Question.objects.filter(q_type='placebo')
        elif ud.status == 5 and ud.email_date<=dt.date.today(): 
            qlist = Question.objects.filter(q_category=ud.category,q_type='prepos')
        
        dat = []
        for q in qlist:
            if q.q_format=="mcq":
                dat.append({"format":"mcq","pk":q.pk,"text":q.text,"choice1":q.choice1,"choice2":q.choice2,"choice3":q.choice3,"choice4":q.choice4})
            else:
                dat.append({"format":"openended","pk":q.pk,"text":q.text})

        return JsonResponse({"data":dat[ud.q_no-1],"q_no":ud.q_no})

@login_required
def ans_ques(request):
    if request.method=='POST':
        ud = Userdata.objects.get(user_id=request.user)
        ud.q_no+=1
        ud.save()

        data = json.loads(request.body.decode('utf-8'))
        Answer.objects.create(q_no=Question.objects.get(pk=data['pk']),userdata_id=ud,ans=data['ans'])

        if ud.status == 1:
            if ud.q_no == Question.objects.filter(q_category=ud.category,q_type='prepos').count():
                ud.category+=1
                ud.q_no = 1
                ud.save()

            if ud.category == 5:
                iid = ud.pk%10
                if iid>0 and iid<5:
                    ud.status = 2  #experiment
                elif iid>4 and iid<8:
                    ud.status = 3  #placebo
                else:
                    ud.status = 4  #control
                ud.email_date = dt.date.today()
                ud.category = 1
                ud.save()

        if ud.status == 2:
            if ud.q_no == Question.objects.filter(q_category=ud.category,q_type='experiment').count():
                ud.category+=1
                ud.email_date += dt.timedelta(days=7)
                ud.q_no = 1
                ud.save()

            if ud.category == 5:
                ud.status = 5
                ud.category = 1
                ud.save()

        if ud.status == 3:
            if ud.q_no == Question.objects.filter(q_type='placebo').count():
                ud.status = 5
                ud.save()

        if ud.status == 5:
            if ud.q_no == Question.objects.filter(q_category=ud.category,q_type='prepos').count():
                ud.category+=1
                ud.q_no = 1
                ud.save()

            if ud.category == 5:
                ud.status = 6
                ud.save()

        return JsonResponse({"success":1})