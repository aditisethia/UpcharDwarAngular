import { Component, ViewChild } from '@angular/core';
import {

  ChartComponent,

} from "ng-apexcharts";



export type ChartOptions = {
  series: any;
  chart: any;
  xaxis: any;
  title: any;
 
};
@Component({
  selector: 'app-pharmacy-admin-sales',
  templateUrl: './pharmacy-admin-sales.component.html',
  styleUrls: ['./pharmacy-admin-sales.component.css'],
  template: `<ag-charts-angular style="height: 100%" [options]="options"></ag-charts-angular> `,
})
export class PharmacyAdminSalesComponent {

  @ViewChild("charts", { static: false }) charts: ChartComponent | undefined;
  public chartOptions: Partial<ChartOptions> 


  

  

  constructor() {

 



    this.chartOptions = {
      series: [
        {
          name: "month-revenue $",
          data: [150, 41, 35, 51, 49, 62, 69, 91, 148]
        }
      ],
      chart: {
        height: 350,
        type: "bar"
      },
      title: {
        text: "Total Revenue of Our Shop"
      },
      xaxis: {
        categories: ["Jan", "Feb",  "Mar",  "Apr",  "May",  "Jun",  "Jul",  "Aug", "Sep"]
      }
    };
  }
}
