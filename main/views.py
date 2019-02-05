from __future__ import unicode_literals
from django.shortcuts import render
from django.views.generic import View,ListView
from django.http import JsonResponse
from main.models import Userdata,Question,Answer
import json
from django.contrib.auth.models import User


def main(request):
    return render(request, 'index.html',)


def proceed(request):
    return render(request,'loggedIn.html',)


def formdata(request):
    data_get = json.loads(request.body.decode('utf-8'))
    Userdata.objects.create(user_id = request.user,
                            name=data_get['name'],
                            age=data_get['age'],
                            gender=data_get['gender'],
                            contactno=data_get['phone'],
                            education_level=data_get['year'])
    return JsonResponse({"sucess":1})


def pre_cat(request):
    data_get = json.loads(request.body.decode('utf-8'))
    ud = Userdata.objects.get(user_id = request.user)
    ud.category = data_get['category']
    ud.save()
    iid = ud.pk%10

    if iid>0 and iid<5:
        ud.group="experiment"
    elif iid>4 and iid<8:
        ud.group="placebo"
    else:
        ud.group="none"

    ud.save()
    return JsonResponse({"success":1})    


def status(request):
    try:
        ud = Userdata.objects.get(user_id = request.user)
        st = ud.status
        cat = ud.category
    except:
        st = 0
        cat = -1
        pass
    data = {"stage":st,"category":cat}
    return JsonResponse(data)
    

def prepos_details(request):
    if request.method=='POST':
        ud = Userdata.objects.get(user_id = request.user)
        qlist = []
        if ud.status == 2: 
            qlist = Question.objects.filter(q_category=ud.category,question_type='preassessment')
        elif ud.status == 3:
            qlist = Question.objects.filter(q_category=ud.category,question_type='postassessment')
        
        dat = []
        for q in qlist:
            if q.q_format=="mcq":
                dat.append({"format":"mcq","pk":q.pk,"text":q.text,"choice1":q.choice1,"choice2":q.choice2,"choice3":q.choice3,"choice4":q.choice4})
            else:
                dat.append({"format":"openended","pk":q.pk,"text":q.text})

        return JsonResponse({"data":dat})


def ans_ques(request):
    if request.method=='POST':
        data = json.loads(request.body.decode('utf-8'))
        Answer.objects.create(q_no=data['pk'],userdata_id=request.user,ans=data['ans'])
        return JsonResponse({"success":1})