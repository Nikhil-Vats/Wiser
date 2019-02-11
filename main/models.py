from django.db import models
from django.contrib.auth.models import User
from datetime import date

QUESTION_TYPES = (
    ('prepos','PREPOS'),
    ('experiment','EXPERIMENT'),
    ('placebo','PLACEBO'),
    ('control','CONTROL')
)

QUESTION_FORMAT = (
    ('mcq','MCQ'),
    ('openended', 'OPENENDED'),
    ('radio','RADIO')
)


class Userdata(models.Model):
    user_id=models.ForeignKey(User,on_delete=models.CASCADE)
    name=models.CharField(max_length=100)
    age=models.PositiveIntegerField()
    gender=models.CharField(max_length=100)
    education_level=models.CharField(max_length=100)
    contactno=models.PositiveIntegerField()
    group=models.CharField(max_length=450,choices=QUESTION_TYPES,null=True)
    state = models.CharField(max_length=100, default = "Bihar")
    city = models.CharField(max_length=100, null=True)
    category=models.IntegerField(default=-1)
    status=models.IntegerField(default=1)
    email_date= models.DateField(default=date.today())
    post_date = models.DateField(default=date.today())
    q_no = models.IntegerField(default=1)

    def __str__(self):
            return str(self.name)


class Question(models.Model):
    text = models.CharField(max_length=45000)
    q_type=models.CharField(max_length=450,choices=QUESTION_TYPES,null=True)
    q_format=models.CharField(max_length=450,choices=QUESTION_FORMAT,null=True)
    q_category = models.IntegerField(null=True)
    choice1=models.CharField(max_length=4500,null=True,default='wsr')
    choice2=models.CharField(max_length=4500,null=True,default='wsr')
    choice3=models.CharField(max_length=4500,null=True,default='wsr')
    choice4=models.CharField(max_length=4500,null=True,default='wsr')
    choice5=models.CharField(max_length=4500,null=True,default='wsr')
    choice6=models.CharField(max_length=4500,null=True,default='wsr')
    choice7=models.CharField(max_length=4500,null=True,default='wsr')

    def __str__(self):
        return str(self.pk)


class Answer(models.Model):
    q_no=models.ForeignKey(Question,on_delete=models.CASCADE)
    userdata_id=models.ForeignKey(Userdata,on_delete=models.CASCADE)
    ans = models.CharField(max_length=5000000)

    def __str__(self):
        return str(self.userdata_id)

