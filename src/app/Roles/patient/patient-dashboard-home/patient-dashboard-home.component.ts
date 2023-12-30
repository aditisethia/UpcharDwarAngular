import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-dashboard-home',
  templateUrl: './patient-dashboard-home.component.html',
  styleUrls: ['./patient-dashboard-home.component.css']
})
export class PatientDashboardHomeComponent implements OnInit{
 
  appointments: any[] | undefined;
  public prescriptions: any[] = []; 
  public medicalRecords: any[] = [];
  public billingRecords: any[] = [];

  ngOnInit(): void {
  this.  appointments = [
      { doctorId: 1, doctorName: 'Dr. Ruby Perrin', specialty: 'Dental', doctorImage: 'assets/img/doctors/doctor-thumb-01.jpg', apptDate: '14 Nov 2019 10.00 AM', bookingDate: '12 Nov 2019', amount: '$160', followUpDate: '16 Nov 2019', status: 'Confirm' },
      { doctorId: 2, doctorName: 'Dr. akki aly', specialty: 'neuro', doctorImage: 'assets/img/doctors/doctor-thumb-01.jpg', apptDate: '14 Nov 2019 10.00 AM', bookingDate: '12 Nov 2019', amount: '$160', followUpDate: '16 Nov 2019', status: 'Confirm' },
      { doctorId: 1, doctorName: 'Dr. shivi Perrin', specialty: 'Dental', doctorImage: 'assets/img/doctors/doctor-thumb-01.jpg', apptDate: '14 Nov 2019 10.00 AM', bookingDate: '12 Nov 2019', amount: '$160', followUpDate: '16 Nov 2019', status: 'Confirm' },
      { doctorId: 1, doctorName: 'Dr. kimi korian', specialty: 'Dental', doctorImage: 'assets/img/doctors/doctor-thumb-01.jpg', apptDate: '14 Nov 2019 10.00 AM', bookingDate: '12 Nov 2019', amount: '$160', followUpDate: '16 Nov 2019', status: 'Confirm' }
    ];
    this.prescriptions = [
      { date: '14 Nov 2019', name: 'Prescription 1', createdBy: { id: 1, name: 'Dr. Ruby Perrin', specialty: 'Dental', image: 'assets/img/doctors/doctor-thumb-01.jpg' } },
      { date: '15 Nov 2019', name: 'Prescription 2', createdBy: { id: 1, name: 'Dr. kann kui', specialty: 'Dental', image: 'assets/img/doctors/doctor-thumb-02.jpg' } },
      { date: '16 Nov 2019', name: 'Prescription 3', createdBy: { id: 1, name: 'Dr. tany tini', specialty: 'Dental', image: 'assets/img/doctors/doctor-thumb-03.jpg' } },
      
  ];
  this.medicalRecords = [
    { id: '#MR-0010', date: '14 Nov 2019', description: 'Dental Filling', attachment: 'dental-test.pdf', createdBy: { name: 'Dr. Ruby Perrin', specialty: 'Dental', image: 'assets/img/doctors/doctor-thumb-01.jpg' } },
    { id: '#MR-0011', date: '13 Nov 2019', description: 'neurocerjon', attachment: 'dental-test.pdf', createdBy: { name: 'Dr. cuby Perrin', specialty: 'Dental', image: 'assets/img/doctors/doctor-thumb-01.jpg' } },
    { id: '#MR-0012', date: '12 Nov 2019', description: 'ddfgh', attachment: 'dental-test.pdf', createdBy: { name: 'Dr. cuby Perrin', specialty: 'Dental', image: 'assets/img/doctors/doctor-thumb-01.jpg' } },
   
];

this.billingRecords = [
  { invoiceNo: '#INV-0010', doctor: { name: 'Ruby Perrin', specialty: 'Dental', image: 'assets/img/doctors/doctor-thumb-01.jpg' }, amount: 450, paidOn: '14 Nov 2019' },
  { invoiceNo: '#INV-0010', doctor: { name: 'Ruby Perrin', specialty: 'Dental', image: 'assets/img/doctors/doctor-thumb-01.jpg' }, amount: 450, paidOn: '14 Nov 2019' },
  { invoiceNo: '#INV-0010', doctor: { name: 'Ruby Perrin', specialty: 'Dental', image: 'assets/img/doctors/doctor-thumb-01.jpg' }, amount: 450, paidOn: '14 Nov 2019' },

];
  }
  getStatusBadgeClass(status: string): string {
    // Define logic to determine the badge class based on appointment status
    return status === 'Confirm' ? 'bg-success-light' : (status === 'Pending' ? 'bg-warning-light' : 'bg-danger-light');
}
}