import { Component, AfterViewInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-riskpage',
  templateUrl: './riskpage.component.html',
  styleUrls: ['./riskpage.component.css']
})
export class RiskpageComponent implements AfterViewInit{
  title = 'dataread';
  chart: any;
  dataPoints: any = [];
  showChart: Boolean = false;

  constructor(private http: HttpClient) {}

  chartOptions = {
    animationEnabled: true,
    theme: 'dark1', //"light2", "dark1", "dark2"
    title: {
      text: 'Projected Portfolio',
    },
    axisX: {
      reversed: false,
    },
    axisY: {
      title: 'Marks Scored (Out of 100)',
      includeZero: true
    },

    data : [{
        type: "line",
        dataPoints: this.dataPoints
      }],
  };
  getChartInstance(chart: object) {
    this.chart = chart;
  }
  ngAfterViewInit() {
    this.http
      .get('/assets/sample.csv', {
        responseType: 'text',
      })
      .subscribe((response: any) => {
        let csvRowData = response.split(/[\r?\n|\r|\n]+/);
        csvRowData.forEach((rowData: any, index: number) => {
          if (index === 0) return;
          var data = rowData.split(',');
          this.dataPoints.push({ x: parseFloat(data[0]) ,y: parseFloat(data[1]) });
        });
        this.showChart = true;
      });
    }
}
