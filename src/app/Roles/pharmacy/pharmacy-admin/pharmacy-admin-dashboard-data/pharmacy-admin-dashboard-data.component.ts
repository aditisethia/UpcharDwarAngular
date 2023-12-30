import { Component, ViewChild } from '@angular/core';
import {
  ChartComponent
} from "ng-apexcharts";

export type ChartOptions = {
  series: any;
  chart: any;
  xaxis: any;
  title: any;
};
@Component({
  selector: 'app-pharmacy-admin-dashboard-data',
  templateUrl: './pharmacy-admin-dashboard-data.component.html',
  styleUrls: ['./pharmacy-admin-dashboard-data.component.css'],
  template: `<ag-charts-angular style="height: 100%" [options]="options"></ag-charts-angular> `,
})
export class PharmacyAdminDashboardDataComponent {

  @ViewChild("chart", { static: false }) chart: ChartComponent | undefined;
  public chartOptions: Partial<ChartOptions>;
 
  constructor() {





    this.chartOptions = {
      series: [
        {
          name: 'today-revenue $',
          data: [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120],
        },
      ],
      chart: {
        height: 350,
        type: 'bar',
      },
      title: {
        text: 'Hourly Revenue Today',
      },
      xaxis: {
        categories: [
          '00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00',
          '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00',
          '20:00', '21:00', '22:00', '23:00',
        ],
      },
    };
  }












  dashWidgets = [
    { icon: 'assets/img/icon-01.png', title: 'Total Orders', value: 1500, subtitle: 'Till Today', percentage: 75 },
    { icon: 'assets/img/icon-02.png', title: 'Today Orders', value: 160, subtitle: '06, Nov 2019', percentage: 65 },
    { icon: 'assets/img/icon-03.png', title: 'Pending Orders', value: 85, subtitle: '06, Apr 2019', percentage: 50 }
  ];
  pharmacyAdminWidgets: any[] = [
    { title: 'Widget 1', value: '10', subtitle: 'Subtitle 1', percentage: 70, icon: 'path/to/icon1.png' },
    { title: 'Widget 2', value: '25', subtitle: 'Subtitle 2', percentage: 45, icon: 'path/to/icon2.png' },
    { title: 'Widget 3', value: '50', subtitle: 'Subtitle 3', percentage: 90, icon: 'path/to/icon3.png' }
    // Add more widgets as needed
  ];

  pendingOrders: any[] = [
    { orderId: '1', customerName: 'Customer 1', orderDate: '2023-01-01', status: 'Pending', totalAmount: 100 },
    { orderId: '2', customerName: 'Customer 2', orderDate: '2023-01-02', status: 'Pending', totalAmount: 150 }
    // Add more pending orders as needed
  ];

  completedOrders: any[] = [
    { orderId: '3', customerName: 'Customer 3', orderDate: '2023-01-03', status: 'Completed', totalAmount: 200 },
    { orderId: '4', customerName: 'Customer 4', orderDate: '2023-01-04', status: 'Completed', totalAmount: 120 }
    // Add more completed orders as needed
  ];
}

