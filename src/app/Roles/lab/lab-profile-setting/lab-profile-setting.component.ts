import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-lab-profile-setting',
  templateUrl: './lab-profile-setting.component.html',
  styleUrls: ['./lab-profile-setting.component.css']
})
export class LabProfileSettingComponent {
 labProfileForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }


  addExperience(): void {
    // Define logic for adding experience
    console.log('Add Experience clicked');
  }

  addMembership(): void {
    // Define logic for adding membership
    console.log('Add Membership clicked');
  }

  addRegistration(): void {
    // Define logic for adding registration
    console.log('Add Registration clicked');
  }
  
  private initForm(): void {
    this.labProfileForm = this.fb.group({
      basicInformation: this.fb.group({
        email: ['example@example.com'],
        labName: [''],
        phoneNumber: ['']
      }),
      aboutMe: this.fb.group({
        biography: ['']
      }),
      labInfo: this.fb.group({
        labName: [''],
        labAddress: [''],
        labImages: [''] // You can extend this as needed
      }),
      contactDetails: this.fb.group({
        addressLine1: [''],
        addressLine2: [''],
        city: [''],
        state: [''],
        country: [''],
        postalCode: ['']
      }),
      experience: this.fb.group({
        labName: [''],
        from: [''],
        to: [''],
        designation: ['']
      }),
      memberships: this.fb.group({
        membership: ['']
      }),
      registrations: this.fb.group({
        registration: [''],
        year: ['']
      })
    });
  }

  submitForm(): void {
    // Handle form submission logic here
    console.log(this.labProfileForm.value);
  }

  
}
