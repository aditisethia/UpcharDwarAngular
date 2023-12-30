import { Component } from '@angular/core';

@Component({
  selector: 'app-search-doctor',
  templateUrl: './search-doctor.component.html',
  styleUrls: ['./search-doctor.component.css']
})
export class SearchDoctorComponent {
  maleDoctorChecked: boolean = true;
  femaleDoctorChecked: boolean = false;

  specialists = [
    { name: 'Urology', checked: true },
    { name: 'Neurology', checked: true },
    { name: 'Dentist', checked: false },
    { name: 'Orthopedic', checked: false },
    { name: 'Cardiologist', checked: false },
  ];

  search() {
    // Implement your search logic here
    console.log('Search button clicked!');
    console.log('Male Doctor Checked:', this.maleDoctorChecked);
    console.log('Female Doctor Checked:', this.femaleDoctorChecked);
    console.log('Selected Specialists:', this.specialists.filter(s => s.checked).map(s => s.name));
  }
}
