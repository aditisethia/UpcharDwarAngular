import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-doctor-appointment-booking',
  templateUrl: './patient-doctor-appointment-booking.component.html',
  styleUrls: ['./patient-doctor-appointment-booking.component.css']
})
export class PatientDoctorAppointmentBookingComponent {
  doctorInfo = {
    name: 'Dr. Darren Elder',
    rating: 35,
    location: 'Newyork, USA',
    profileImageUrl: 'assets/img/doctors/doctor-thumb-02.jpg'
  };

  // Define properties for schedule data
  schedule = {
    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    dates: [
      '11 Nov 2019', '12 Nov 2019', '13 Nov 2019', '14 Nov 2019', '15 Nov 2019',
      '16 Nov 2019', '17 Nov 2019', '18 Nov 2019', '19 Nov 2019', '20 Nov 2019',
      '21 Nov 2019', '22 Nov 2019', '23 Nov 2019', '24 Nov 2019', '25 Nov 2019',
      // Add more dates as needed
    ],
    times: [
      '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM',
      '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM','9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM',
      '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM',
      // Add more times as needed
    ]
  };
  

  // Function to handle booking
  proceedToPay() {
    // Add your logic for handling the booking process
  }
}
