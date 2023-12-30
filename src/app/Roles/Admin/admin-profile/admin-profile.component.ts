import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent {

  user: any = {
    name: 'Amit Sharma',
    email: 'amitsharma@example.com',
    location: 'Delhi, India',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    dob: '15 Nov 1990',
    mobile: '+91 98765 43210',
    address: '123 Main Street',
    city: 'New Delhi',
    state: 'Delhi',
    zipCode: '110001',
    country: 'India',
    password: {
      oldPassword: '',
      newPassword: '',
      confirmPassword: ''
    }
  };
  

}
