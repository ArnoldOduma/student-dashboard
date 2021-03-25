import {Component, OnInit} from '@angular/core';
import {Color, Label} from "ng2-charts";
import {ChartDataSets, ChartOptions} from "chart.js";
import {ApiService} from "../services/api.service";
import {
  MeanMarks,
  OverallPosition,
  StreamPosition,
  StudentData,
  StudentPerformanceOverTime,
  SubjectResult
} from "../model/dataModel";
import {forEachToken} from "tslint";

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
        const chartData:any [] = [];
        const labels = [];
        this.studentData.student_performance_over_time.forEach( e => {
            chartData.push(e.avg_score);
            labels.push(e.exam_name);
          }
        );
        console.log(chartData);

        // @ts-ignore
        this.lineChartData =  [
          {data: chartData, label: 'Marks'},
        ];
        this.lineChartLabels = labels;

      }, error => {
        console.log(error)
      }
    )
  }

}
