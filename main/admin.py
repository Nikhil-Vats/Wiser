from django.contrib import admin
from main.models import Userdata,Question,Answer
# Register your models here.
from import_export import resources
from import_export.admin import ImportExportModelAdmin


@admin.register(Userdata)
class UserdataAdmin(ImportExportModelAdmin):
    pass

@admin.register(Question)
class QuestionAdmin(ImportExportModelAdmin):
    pass

@admin.register(Answer)
class AnswerAdmin(ImportExportModelAdmin):
    pass