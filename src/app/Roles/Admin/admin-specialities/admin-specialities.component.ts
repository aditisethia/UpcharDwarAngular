import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-specialities',
  templateUrl: './admin-specialities.component.html',
  styleUrls: ['./admin-specialities.component.css']
})
export class AdminSpecialitiesComponent {

  specialities = [
    { id: 'SP001', name: 'Urology', image: 'assets/img/specialities/specialities-01.png' },
    { id: 'SP002', name: 'Neurology', image: 'assets/img/specialities/specialities-02.png' },
    { id: 'SP003', name: 'Orthopedic', image: 'assets/img/specialities/specialities-03.png' },
    { id: 'SP004', name: 'Cardiologist', image: 'assets/img/specialities/specialities-04.png' },
    { id: 'SP005', name: 'Dentist', image: 'assets/img/specialities/specialities-05.png' }
    // Add more speciality data as needed
  ];
}
