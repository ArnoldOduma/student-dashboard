import {Component, OnInit} from '@angular/core';
import {Color, Label} from "ng2-charts";
import {ChartDataSets, ChartOptions, ChartType} from "chart.js";
import {ApiService} from "../services/api.service";
import {
  MeanMarks,
  OverallPosition,
  StreamPosition,
  StudentData,
  StudentPerformanceOverTime,
  SubjectResult
} from "../model/dataModel";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  studentData: StudentData;

  public lineChartData: ChartDataSets[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Performance'},
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    annotation: undefined,
    responsive: true
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'rgba(67, 171, 73, 1)',
      backgroundColor: 'rgba(67, 171, 73, 0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  // Pie
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };
  public pieChartLabels: Label[] = [['Download', 'Sales'], ['In', 'Store', 'Sales'], 'Mail Sales'];
  public pieChartData: number[] = [300, 500, 100];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  // public pieChartPlugins = [pluginDataLabels];
  public pieChartColors = [
    {
      backgroundColor: ['rgb(67,171,73)', 'rgba(0,255,0,0.3)', 'rgb(0,162,232)',
        'rgb(0,232,25)', 'rgb(153,0,232)', 'rgb(0,162,232)', 'rgb(178,232,0)',
        'rgb(0,48,232)', 'rgb(120,14,232)', 'rgb(232,0,85)', 'rgb(232,88,0)'],
    },
  ];

  constructor(
    private apiService: ApiService
  ) {
  }

  ngOnInit(): void {
    this.getData();
    this.studentData = new class implements StudentData {
      class_name: string;
      class_teachers_remarks: string;
      exam_name: string;
      mean_grade: string;
      mean_marks: MeanMarks;
      overall_position: OverallPosition;
      principals_remarks: string;
      stream_position: StreamPosition;
      student_admission_number: string;
      student_name: string;
      student_performance_over_time: StudentPerformanceOverTime[];
      student_photo: string;
      subject_results: SubjectResult[];
    };
  }

  getData() {
    this.apiService.getData().subscribe(
      res => {
        console.log(res);
        this.studentData = res;
        // linechart
        const chartData: any [] = [];
        const labels = [];
        this.studentData.student_performance_over_time.forEach(e => {
            chartData.push(e.avg_score);
            labels.push(e.exam_name);
          }
        );
        console.log(chartData);

        // pie chart
        const pieData: any[] = [];
        const pieLabels: any[] = [];
        this.studentData.subject_results.forEach(e => {
          pieData.push(e.score);
          pieLabels.push(e.subject_name)
        });

        this.pieChartData = pieData;
        this.pieChartLabels = pieLabels;


        // @ts-ignore
        this.lineChartData = [
          {data: chartData, label: 'Marks'},
        ];
        this.lineChartLabels = labels;

      }, error => {
        console.log(error)
      }
    )
  }

}
