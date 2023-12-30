import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-appointments',
  templateUrl: './admin-appointments.component.html',
  styleUrls: ['./admin-appointments.component.css']
})
export class AdminAppointmentsComponent {


  appointments = [
    {
      doctor: { name: 'Dr. Ruby Perrin', image: 'assets/img/doctors/doctor-thumb-01.jpg', specialty: 'Dental' },
      patient: { name: 'Charlene Reed', image: 'assets/img/patients/patient1.jpg' },
      time: '9 Nov 2019 11.00 AM - 11.15 AM',
      status: true,
      amount: '$200.00'
    },
    {
      doctor: { name: 'Dr. Olga Barlow', image: 'assets/img/doctors/doctor-thumb-10.jpg', specialty: 'Dental' },
      patient: { name: 'Robert Rhodes', image: 'assets/img/patients/patient10.jpg' },
      time: '23 Nov 2019 12.10 PM - 12.25 PM',
      status: true,
      amount: '$300.00'
    }
    // Add more appointment data as needed
  ];
}
