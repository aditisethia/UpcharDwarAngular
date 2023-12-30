import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-doctorlist',
  templateUrl: './admin-doctorlist.component.html',
  styleUrls: ['./admin-doctorlist.component.css']
})
export class AdminDoctorlistComponent {

  doctors = [
    {
      id:1,
      name: 'Dr. Ruby Perrin',
      specialty: 'Dental',
      memberSince: '14 Jan 2019',
      earned: '$3100.00',
      status: true,
      imagePath: 'assets/img/doctors/doctor-thumb-01.jpg'
    },
    {
      id:2,
      name: 'Dr. Ruby Perrin',
      specialty: 'Dental',
      memberSince: '14 Jan 2019',
      earned: '$3100.00',
      status: true,
      imagePath: 'assets/img/doctors/doctor-thumb-03.jpg'
    },
    {
      id:3,
      name: 'Dr. Ruby Perrin',
      specialty: 'Dental',
      memberSince: '14 Jan 2019',
      earned: '$3100.00',
      status: true,
      imagePath: 'assets/img/doctors/doctor-thumb-04.jpg'
    },
    {
      id:4,
      name: 'Dr. Ruby Perrin',
      specialty: 'Dental',
      memberSince: '14 Jan 2019',
      earned: '$3100.00',
      status: true,
      imagePath: 'assets/img/doctors/doctor-thumb-05.jpg'
    },
    {
      id:1,
      name: 'Dr. Ruby Perrin',
      specialty: 'Dental',
      memberSince: '14 Jan 2019',
      earned: '$3100.00',
      status: true,
      imagePath: 'assets/img/doctors/doctor-thumb-02.jpg'
    },
    {
      id:1,
      name: 'Dr. Ruby Perrin',
      specialty: 'Dental',
      memberSince: '14 Jan 2019',
      earned: '$3100.00',
      status: true,
      imagePath: 'assets/img/doctors/doctor-thumb-02.jpg'
    },
    {
      id:1,
      name: 'Dr. Ruby Perrin',
      specialty: 'Dental',
      memberSince: '14 Jan 2019',
      earned: '$3100.00',
      status: true,
      imagePath: 'assets/img/doctors/doctor-thumb-01.jpg'
    },
    // Add other doctor data here...
  ];
}
