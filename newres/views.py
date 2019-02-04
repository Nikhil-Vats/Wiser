from __future__ import unicode_literals
from django.shortcuts import render
from django.views.generic import View,ListView
from django.http import JsonResponse
from newres.models import Userdata,Question,Answer
import json
num=0
# Create your views here.
def main(request):
    return render(request, 'index.html',)

def proceed(request):
    return render(request,'loggedIn.html',)

def formdata(request): #forms data store
    data_get = json.loads(request.body.decode('utf-8'))
    obj= Userdata.objects.create(name=data_get['name'],age=data_get['age'],gender=data_get['gender'],contactno=data_get['contactno'],education_level=data_get['education_level'])
    return JsonResponse(obj)

def status(request):#to store the status number that the front end person will be returning
    data_get = json.loads(request.body.decode('utf-8'))
    name=data_get["email"]
    obj=Userdata.objects.get(emailid=data_get['email'])
    st=data_get["status_no"]
    obj.status=st
    obj.save()
    

def pre_question_details(request):
    if request.method=='POST':
        data_get = json.loads(request.body.decode('utf-8'))
        number=data_get["category_number"]  #specify name of your choice in place of question_number
        name=data_get["email"]
        obj=Userdata.objects.get(emailid=data_get['email'])
        num=number-1
        obj.category=num
        #specify name of your choice in place of question_number
        questiondata=[]
        if number=='1':
            Questionlist=Question.objects.filter(question_id=1,question_type='preassessment')
        elif number=='2':
            Questionlist=Question.objects.filter(question_id=2,question_type='preassessment')
        elif number=='3':
            Questionlist=Question.objects.filter(question_id=3,question_type='preassessment')
        elif number=='4':
            Questionlist=Question.objects.filter(question_id=4,question_type='preassessment')
        for questionlist in Questionlist:
                        question_list={}
                        question_list["preassessment_questions"]={'question':questionlist.question,'choice1':questionlist.choice1,'choice2':questionlist.choice2,
                                        'choice3':questionlist.choice3,'choice4':questionlist.choice4}
                        questiondata.append(question_list)
        # question_list={'question':Questionlist.question,'choice1':Questionlist.choice1,'choice2':Questionlist.choice2,
                        # 'choice3':Questionlist.choice3,'choice4':Questionlist.choice4}
        return JsonResponse(questiondata)

def post_question_details(request):
    data_get = json.loads(request.body.decode('utf-8'))
    number=data_get["category_number"]  #specify name of your choice in place of question_number
    name=data_get["email"]
    obj=Userdata.objects.get(emailid=data_get['email'])
    num=number-1
    obj.category=num
    obj.save()

    questiondata=[]
    if number=='1':
        Questionlist=Question.objects.filter(question_id=1,question_type='postassessment')
    elif number=='2':
        Questionlist=Question.objects.filter(question_id=2,question_type='postassessment')
    elif number=='3':
        Questionlist=Question.objects.filter(question_id=3,question_type='postassessment')
    elif number=='4':
        Questionlist=Question.objects.filter(question_id=4,question_type='postassessment')
    # question_list={'question':Questionlist.question,'choice1':Questionlist.choice1,'choice2':Questionlist.choice2,
                    # 'choice3':Questionlist.choice3,'choice4':Questionlist.choice4}
    for questionlist in Questionlist:
                    question_list={}
                    question_list["postassessment_questions"]={'question':questionlist.question,'choice1':questionlist.choice1,'choice2':questionlist.choice2,
                                            'choice3':questionlist.choice3,'choice4':questionlist.choice4}
                    questiondata.append(question_list)


    return JsonResponse(questiondata)

def exp_question_details(request):
            data_get = json.loads(request.body.decode('utf-8'))
            number=data_get["category_number"]
              #specify name of your choice in place of question_number
            name=data_get["email"]
            obj=Userdata.objects.get(emailid=data_get['email'])
            num=number-1
            obj.category=num
            obj.save()

            questiondata=[]
            if number=='1':
                Questionlist=Question.objects.filter(question_id=1,question_type='experiment')
            elif number=='2':
                Questionlist=Question.objects.filter(question_id=2,question_type='experiment')
            elif number=='3':
                Questionlist=Question.objects.filter(question_id=3,question_type='experiment')
            elif number=='4':
                Questionlist=Question.objects.filter(question_id=4,question_type='experiment')
            for questionlist in Questionlist:
                            question_list={}
                            question_list["experiment_questions"]={'question':questionlist.question,'choice1':questionlist.choice1,'choice2':questionlist.choice2,
                                            'choice3':questionlist.choice3,'choice4':questionlist.choice4}
                            questiondata.append(question_list)
            return JsonResponse(questiondata)

def placebo_question_details(request):
    questiondata=[]
    Questionlist=Question.objects.filter(question_type='placebo')
    for questionlist in Questionlist:
                    question_list={}
                    question_list["placebo_questions"]={'question':questionlist.question}
                    questiondata.append(question_list)
    return JsonResponse(questiondata)

def grp_div(self):
    data_get=json.loads(request.body.decode('utf-8'))
    obj=Userdata.objects.get(user_id=data_get['user_id'])
    iid=userid%10
    if iid>0 and iid<5 :
        obj.group="Experiment"
        obj.save()

    elif iid>4 and iid<8 :
        obj.group="Placebo"
        obj.save()

    elif iid>7 and iid<10 :
        obj.group="Control"
        obj.save()
    elif iid==0 :
        obj.group="Control"
        obj.save()
