import { Component } from '@angular/core';

@Component({
  selector: 'app-lab-dashboard-data',
  templateUrl: './lab-dashboard-data.component.html',
  styleUrls: ['./lab-dashboard-data.component.css']
})
export class LabDashboardDataComponent {
  dashWidgets = [
    { icon: 'assets/img/icon-01.png', title: 'Total test', value: 1500, subtitle: 'Till Today', percentage: 75 },
    { icon: 'assets/img/icon-02.png', title: 'Today todays test', value: 160, subtitle: '06, Nov 2019', percentage: 65 },
    { icon: 'assets/img/icon-03.png', title: 'test already  performed', value: 85, subtitle: '06, Apr 2019', percentage: 50 }
  ];

 
  upcomingLabTest: any[] | undefined; // Replace 'any' with your actual data type
  todayLabTest: any[] | undefined; // Replace 'any' with your actual data type

  ngOnInit() {
 

    this.upcomingLabTest = [
      { clientName: 'Richard Wilson', requestDate: '16 Nov 2019', purpose: 'General', fortest: 'New Patient', paidAmount: '$150' ,patientAvatar:'assets/img/patients/patient1.jpg'},
      { clientName: 'aman patidar', requestDate: '15 Nov 2019', purpose: 'fever', fortest: 'old Patient', paidAmount: '$110' ,patientAvatar:'assets/img/patients/patient2.jpg'},
      { clientName: 'jay solanki', requestDate: '15 Nov 2019', purpose: 'General', fortest: 'New Patient', paidAmount: '$200' ,patientAvatar:'assets/img/patients/patient3.jpg'},
      { clientName: 'rohit  sharma', requestDate: '17 Nov 2019', purpose: 'General', fortest: 'New Patient', paidAmount: '$500' ,patientAvatar:'assets/img/patients/patient4.jpg'},
      { clientName: 'kapil solanki', requestDate: '18 Nov 2019', purpose: 'General', fortest: 'New Patient', paidAmount: '$750' ,patientAvatar:'assets/img/patients/patient5.jpg'},
      // Add more upcoming appointments
    ];

    this.todayLabTest = [ 
      { clientName: 'aditi Wilson', requestDate: '16 Nov 2019', purpose: 'General', fortest: 'New Patient', paidAmount: '$150' ,patientAvatar:'assets/img/patients/patient1.jpg'},
      { clientName: 'aman patidar', requestDate: '15 Nov 2019', purpose: 'fever', fortest: 'old Patient', paidAmount: '$110' ,patientAvatar:'assets/img/patients/patient2.jpg'},
      { clientName: 'ayu solanki', requestDate: '15 Nov 2019', purpose: 'General', fortest: 'New Patient', paidAmount: '$200' ,patientAvatar:'assets/img/patients/patient3.jpg'},
      { clientName: 'rohit  sharma', requestDate: '17 Nov 2019', purpose: 'General', fortest: 'New Patient', paidAmount: '$500' ,patientAvatar:'assets/img/patients/patient4.jpg'},
      { clientName: 'kapil solanki', requestDate: '18 Nov 2019', purpose: 'General', fortest: 'New Patient', paidAmount: '$750' ,patientAvatar:'assets/img/patients/patient5.jpg'},
     
    ];
  }
}
