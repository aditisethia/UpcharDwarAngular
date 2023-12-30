import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-doctor-booking-success',
  templateUrl: './patient-doctor-booking-success.component.html',
  styleUrls: ['./patient-doctor-booking-success.component.css']
})
export class PatientDoctorBookingSuccessComponent {
  appointmentDetails = {
    doctorName: 'Dr. Darren Elder',
    appointmentDateTime: '12 Nov 2019 5:00PM to 6:00PM',
    invoiceLink: 'invoice-view.html',
};
}
