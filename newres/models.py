from django.db import models

# Create your models here.




QUESTION_TYPES = (
    ('preassessment','PRE ASSESSMENT'),
    ('postassessment', 'PRE ASSESSMENT'),
    ('experiment','EXPERIMENT'),
    ('placebo','PLACEBO')
)

QUESTION_FORMAT = (
    ('mcq','PRE ASSESSMENT'),
    ('openended', 'OPENENDED'),
)



class Userdata(models.Model):
    user_id=models.AutoField(primary_key=True)
    emailid=models.EmailField(unique=True)
    password=models.CharField(max_length=100)
    name=models.CharField(max_length=100)
    age=models.PositiveIntegerField()
    gender=models.CharField(max_length=100)
    education_level=models.CharField(max_length=100)
    contactno=models.PositiveIntegerField()
    group=models.CharField(max_length=100)
    category=models.PositiveIntegerField()
    status=models.PositiveIntegerField()

    def __str__(self):
            return str(self.user_id)



class Question(models.Model):
    question = models.CharField(max_length=45000)
    question_id=models.PositiveIntegerField()
    question_no=models.AutoField(primary_key=True,default=1)
    question_type=models.CharField(max_length=450,choices=QUESTION_TYPES,null=True)
    question_format=models.CharField(max_length=450,choices=QUESTION_FORMAT,null=True)
    # user_id=models.ForeignKey(Userdata,on_delete=models.CASCADE)
    choice1=models.CharField(max_length=4500,null=True)
    choice2=models.CharField(max_length=4500,null=True)
    choice3=models.CharField(max_length=4500,null=True)
    choice4=models.CharField(max_length=4500,null=True)
    # selectedchoice=models.CharField(max_length=450,null=True)

    def __str__(self):
        return str(self.question_no)

class Answer(models.Model):
    question_no=models.ForeignKey(Question,on_delete=models.CASCADE)
    user_id=models.ForeignKey(Userdata,on_delete=models.CASCADE)
    answer=models.CharField(max_length=5000000)

    def __str__(self):
        return str(self.user_id)




# class Choices(models.Model):
#     user_id=models.ForeignKey(Userdata,on_delete=models.CASCADE)
#     main_question_no=models.ForeignKey(Question,on_delete=models.CASCADE)
#     choice1=models.CharField(max_length=450,null=True)
#     choice2=models.CharField(max_length=450,null=True)
#     choice3=models.CharField(max_length=450,null=True)
#     choice4=models.CharField(max_length=450,null=True)
#     selectedchoice=models.CharField(max_length=450,null=True)
