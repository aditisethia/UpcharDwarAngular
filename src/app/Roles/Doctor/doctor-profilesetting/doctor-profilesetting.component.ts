import { Component } from '@angular/core';

@Component({
  selector: 'app-doctor-profilesetting',
  templateUrl: './doctor-profilesetting.component.html',
  styleUrls: ['./doctor-profilesetting.component.css']
})
export class DoctorProfilesettingComponent {
  user = {
    firstName: 'Richard',
    lastName: 'Wilson',
    dateOfBirth: '24-07-1983',
    bloodGroup: 'A-',
    email: 'richard@example.com',
    mobile: '+1 202-555-0125',
    address: '806 Twin Willow Lane',
    city: 'Old Forge',
    state: 'Newyork',
    zipCode: '13420',
    country: 'United States',
    // ... other user properties
  };

  profileImage: string | ArrayBuffer = 'assets/img/patients/patient.jpg';

  saveChanges() {
    // Implement logic to save changes to the server
    console.log('Saving changes:', this.user);
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      // Read the selected file as a data URL and set it as the profile image
      const reader = new FileReader();
      reader.onload = (e) => {
        this.profileImage = e.target?.result || '';
      };
      reader.readAsDataURL(file);
    }
  }
}
