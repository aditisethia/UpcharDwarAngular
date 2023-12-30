import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-change-password',
  templateUrl: './patient-change-password.component.html',
  styleUrls: ['./patient-change-password.component.css']
})
export class PatientChangePasswordComponent {
  oldPassword: string = '';
  newPassword: string = '';
  confirmPassword: string = '';

  onSubmit() {
    // Add logic to handle form submission
    console.log('Form submitted:', this.oldPassword, this.newPassword, this.confirmPassword);
    // Add your password change logic here
  }
}
