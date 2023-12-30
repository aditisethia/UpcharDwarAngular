import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-appointment',
  templateUrl: './patient-appointment.component.html',
  styleUrls: ['./patient-appointment.component.css']
})
export class PatientAppointmentComponent {

   appointments = [
    {
      doctor: {
        name: 'Dr. Ruby Perrin',
        profileLink: 'doctor-profile.html',
        avatar: 'assets/img/doctors/doctor-thumb-01.jpg',
        specialty: 'Dental',
      },
      appointmentDate: '14 Nov 2019 10.00 AM',
      bookingDate: '12 Nov 2019',
      amount: '$160',
      followUpDate: '16 Nov 2019',
      status: 'Confirm',
      actions: {
        print: 'javascript:void(0);',
        view: 'javascript:void(0);',
      },
    },
    // ... Add other appointments here
  ];
  }

