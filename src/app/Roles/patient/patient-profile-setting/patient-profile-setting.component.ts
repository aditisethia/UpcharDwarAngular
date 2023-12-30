import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-profile-setting',
  templateUrl: './patient-profile-setting.component.html',
  styleUrls: ['./patient-profile-setting.component.css']
})
export class PatientProfileSettingComponent {
  user = {
    avatar: 'assets/img/patients/patient.jpg',
    firstName: 'Richard',
    lastName: 'Wilson',
    dob: '24-07-1983',
    bloodGroup: 'A-',
    email: 'richard@example.com',
    mobile: '+1 202-555-0125',
    address: '806 Twin Willow Lane',
    city: 'Old Forge',
    state: 'Newyork',
    zipCode: '13420',
    country: 'United States',
  };


  // Add a function to handle form submission if needed
  onSubmit() {
    // Your form submission logic
  }
}
