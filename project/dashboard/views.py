from django.http import JsonResponse
from django.shortcuts import render
import json
<<<<<<< HEAD
from .models import MarksheetVerification, Student
from django.db import models
=======
from .models import *
from django.db.models import *
>>>>>>> 80df4dd7 (first commit)
# Create your views here.

# def index(request):
#     return render(request, 'dashboard/index.html')

<<<<<<< HEAD

=======
>>>>>>> 80df4dd7 (first commit)
# json.dumps() , py dict to json str
# json.loads, json str to py dict
#  json.parse, json str to js obj
#  json.stringify, js obj to json str

def main(request):
    qs = MarksheetVerification.objects.all()
<<<<<<< HEAD
    return render(request, 'dashboard/dashboard-1.html',{'qs':qs})
# def dashboard(request):

#     return render(request, 'dashboard/dashboard.html')
def Chart_data(request):
    qs = MarksheetVerification.objects.all().values('email').annotate(models.Sum('obtained_marks'))
    chart_data = [x['obtained_marks__sum']for x in qs]
    chart_labels = [x['email'] for x in qs]

    # print(chart_labels,chart_data)
    return JsonResponse({
        'chartData':chart_data,
        'chartLabels':chart_labels
    })

def Bar_chart_data(request):
    qs = Student.objects.values('program').annotate(unique_p = models.Sum('class_roll_no',distinct=True)).order_by('program').distinct()
    print(qs)
    chart_data = [x['unique_p']for x in qs]
    chart_labels = [x['program'] for x in qs]
   

    # print(chart_labels,chart_data)
    return JsonResponse({
        'bchartData':chart_data,
        'bchartLabels':chart_labels
    })
=======
    return render(request, 'dashboard/dashboard.html',{'qs':qs})

def data(request):
    qs1 = Student.objects.values('academic_session').annotate(total_inst = models.Count('institute',distinct=True)).order_by('academic_session').distinct()
    tipschartData = [x['total_inst']for x in qs1]
    tipschartLabels = [x['academic_session'] for x in qs1]
    tipschartLabel = 'total no. of institute per session'

    qs2 = Student.objects.values('program').annotate(total_stud = models.Count('reg_no',distinct=True)).order_by('program').distinct()
    tsppchartData = [x['total_stud']for x in qs2]
    tsppchartLabels = [x['program'] for x in qs2]
    tsppchartLabel = 'total no. of student per program'
    
    qs3 = Student.objects.values('institute').annotate(total_stud = models.Count('reg_no',distinct=True)).order_by('institute').distinct()
    tspichartData = [x['total_stud']for x in qs3]
    tspichartLabels = [x['institute'] for x in qs3]
    tspichartLabel = 'total no. of student per institute'

    qs4 = Student.objects.filter(paymentstatus=1).values('academic_session','program').annotate(sum_pay = models.Sum('program',distinct=True)).order_by('program','academic_session').distinct()
    # print(qs)
    bchartData = [x['sum_pay']for x in qs4]
    bchartLabels = [x['program'] for x in qs4]
    bchartLabel = 'sum of payments per session per program, total = {}'.format(sum(bchartData))
   
    return JsonResponse({
        'tipschartLabel':tipschartLabel,
        'tipschartData':tipschartData,
        'tipschartLabels':tipschartLabels,

        'tsppchartLabel':tsppchartLabel,
        'tsppchartData':tsppchartData,
        'tsppchartLabels':tsppchartLabels,

        'tspichartLabel':tspichartLabel,
        'tspichartData':tspichartData,
        'tspichartLabels':tspichartLabels,

        'bchartLabel':bchartLabel,
        'bchartData':bchartData,
        'bchartLabels':bchartLabels,
        
    })


'''Total no. of candidates registered in selected year per institute'''
def cd_1(request):
    # sq = Bcece.objects.annotate(count_regi = Count('reg_no',distinct=True)).distinct().values().count()
    qs = Bcece.objects.values('institute').annotate(count_regi = Count('reg_no',distinct=True)).order_by('year').distinct()
    print(qs)
    chartData = [x['count_regi']for x in qs]
    chartLabels = [x['institute'] for x in qs]
    chartLabel = 'no. of candidates registered in year wise per institute'
   

    return JsonResponse({
        'cd1chartLAbel':chartLabel,
        'cd1_chartData':chartData, 
        'cd1_chartLabels':chartLabels, 
    })

'''No. of student pass vs fail'''
def cd_2(request):
    pass

'''no of student enrolled subject wise in a selected semester'''
def cd_3(request):
    qs = Student.objects.values('program','academic_session').annotate(no_stud = Count('program')).order_by('academic_session').distinct()
    # print(qs)
    chartData = [x['no_stud']for x in qs]
    chartLabels = [x['program'] for x in qs]
    chartLabel = 'no of student enrolled subject wise in a selected semester'
   
    return JsonResponse({
        'cd3chartLAbel':chartLabel,
        'cd3_chartData':chartData, 
        'cd3_chartLabels':chartLabels, 
    })

'''no of student with completed marks entry per institiute'''
def cd_4(request):
    qs = OldTask.objects.values('is_finalized','institute_id').annotate(sum_stud = Sum('student_count')).order_by('institute_id').distinct()
    # print(qs)
    chartData = [x['sum_stud']for x in qs]
    chartLabels = [x['institute_id'] for x in qs]
    chartLabel = 'no of student with completed marks entry per institiute'
   
    return JsonResponse({
        'cd3chartLAbel':chartLabel,
        'cd3_chartData':chartData, 
        'cd3_chartLabels':chartLabels, 
    })

'''no. of student with completed fee payment vs not paid institute wise'''
def cd_5(request):
    qs1 = Student.objects.values('institute').annotate(sum_stud = Sum('pk',paymentstatus=1 )).order_by('institute').distinct()
    qs2 = Student.objects.values('institute').annotate(sum_stud = Sum('pk',paymentstatus=0 )).order_by('institute').distinct()
    # print(qs)
    chartData1 = [x['sum_stud']for x in qs1]
    chartLabels1 = [x['institute'] for x in qs1]
    chartLabel = 'no of student with completed marks entry per institiute'
    chartData2 = [x['sum_stud']for x in qs2]
    chartLabels2 = [x['institute'] for x in qs2]
   
    return JsonResponse({
        'cd3chartLAbel':chartLabel,
        'cd3_chartData':chartData1, 
        'cd3_chartLabels':chartLabels1, 
        'cd3_chartData':chartData2, 
        'cd3_chartLabels':chartLabels2, 
    })

'''no of stud scheduled for exam in the selected sem vs no. of students appeared'''
def cd_6(request):
    pass

'''active operators name & login ID'''
def cd_7(request):
    pass

'''recent activities of institute'''
def cd_8(request):
    pass

'''recent activities of operator'''
def cd_9(request):
    pass
>>>>>>> 80df4dd7 (first commit)
