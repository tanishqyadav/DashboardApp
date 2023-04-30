<<<<<<< HEAD

=======
>>>>>>> 80df4dd7 (first commit)
from django.urls import path
from . import views

urlpatterns = [
    path('', views.main, name='dashboard'),
<<<<<<< HEAD
    path('chart',views.Chart_data),
    path('barchart',views.Bar_chart_data),
=======
    # path('chart',views.Chart_data),
    path('data',views.data),
    path('cd1',views.cd_1),
    path('cd2',views.cd_2),
    path('cd3',views.cd_3),
    path('cd4',views.cd_4),
    path('cd5',views.cd_5),
    path('cd6',views.cd_6),
    path('cd7',views.cd_7),
    path('cd8',views.cd_8),
    path('cd9',views.cd_9),
    
    
>>>>>>> 80df4dd7 (first commit)
]