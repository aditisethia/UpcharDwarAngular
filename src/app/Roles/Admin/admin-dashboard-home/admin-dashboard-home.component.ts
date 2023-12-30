import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard-home',
  templateUrl: './admin-dashboard-home.component.html',
  styleUrls: ['./admin-dashboard-home.component.css']
})
export class AdminDashboardHomeComponent {



  doctors = [
    { name: 'Dr. Aditi Perrin', speciality: 'Dental', earned: '$3200.00', reviews: 4 },
    { name: 'Dr. Darren Elder', speciality: 'Dental', earned: '$3100.00', reviews: 4 },
    { name: 'Dr. Deborah Angel', speciality: 'Cardiology', earned: '$4000.00', reviews: 4 },
    { name: 'Dr. Sofia Brient', speciality: 'Urology', earned: '$3200.00', reviews: 4 },
    { name: 'Dr. Marvin Campbell', speciality: 'Orthopaedics', earned: '$3500.00', reviews: 4 },
  ];


  patients = [
    { name: 'rohit Reed', phone: '8286329170', lastVisit: '20 Oct 2019', paid: '$100.00' },
    { name: 'Travis Trimble', phone: '2077299974', lastVisit: '22 Oct 2019', paid: '$200.00' },
    { name: 'Carl Kelly', phone: '2607247769', lastVisit: '21 Oct 2019', paid: '$250.00' },
    { name: 'Michelle Fairfax', phone: '5043686874', lastVisit: '21 Sep 2019', paid: '$150.00' },
    { name: 'Gina Moore', phone: '9548207887', lastVisit: '18 Sep 2019', paid: '$350.00' },
  ];

  appointments = [
    {
      doctor: { name: 'Dr. Ruby Perrin', image: 'assets/img/doctors/doctor-thumb-01.jpg', specialty: 'Dental' },
      patient: { name: 'Charlene Reed', image: 'assets/img/patients/patient1.jpg' },
      time: '9 Nov 2019 11.00 AM - 11.15 AM',
      status: false,
      amount: '$200.00'
    },
    // Add more appointment data as needed
  ];
}
