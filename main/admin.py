from django.contrib import admin
from main.models import Userdata,Question,Answer,Country,State,City
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

@admin.register(Country)
class CountryAdmin(ImportExportModelAdmin):
    pass

@admin.register(State)
class StateAdmin(ImportExportModelAdmin):
    pass

@admin.register(City)
class CityAdmin(ImportExportModelAdmin):
    pass