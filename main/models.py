from django.db import models
from django.contrib.auth.models import User
from datetime import date

QUESTION_TYPES = (
    ('preassessment','PRE ASSESSMENT'),
    ('postassessment', 'PRE ASSESSMENT'),
    ('experiment','EXPERIMENT'),
    ('placebo','PLACEBO'),
    ('none','NONE')
)

QUESTION_FORMAT = (
    ('mcq','MCQ'),
    ('openended', 'OPENENDED'),
)



class Userdata(models.Model):
    user_id=models.ForeignKey(User,on_delete=models.CASCADE)
    name=models.CharField(max_length=100)
    age=models.PositiveIntegerField()
    gender=models.CharField(max_length=100)
    education_level=models.CharField(max_length=100)
    contactno=models.PositiveIntegerField()
    group=models.CharField(max_length=450,choices=QUESTION_TYPES,null=True)
    category=models.IntegerField(default=-1)
    status=models.IntegerField(default=1)
    email_date= models.DateField(default=date.today())

    def __str__(self):
            return str(self.name)


class Question(models.Model):
    text = models.CharField(max_length=45000)
    q_no=models.IntegerField()
    q_type=models.CharField(max_length=450,choices=QUESTION_TYPES,null=True)
    q_format=models.CharField(max_length=450,choices=QUESTION_FORMAT,null=True)
    q_category = models.IntegerField(null=True)
    choice1=models.CharField(max_length=4500,null=True)
    choice2=models.CharField(max_length=4500,null=True)
    choice3=models.CharField(max_length=4500,null=True)
    choice4=models.CharField(max_length=4500,null=True)

    def __str__(self):
        return str(self.q_no)


class Answer(models.Model):
    q_no=models.ForeignKey(Question,on_delete=models.CASCADE)
    userdata_id=models.ForeignKey(Userdata,on_delete=models.CASCADE)
    ans = models.CharField(max_length=5000000)

    def __str__(self):
        return str(self.userdata_id)

