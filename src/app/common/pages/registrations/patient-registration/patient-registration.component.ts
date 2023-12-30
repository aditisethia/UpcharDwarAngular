import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/entity/Patient';
import { PatientserviceService } from 'src/app/services/patient-service/patientservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.css']
})
export class PatientRegistrationComponent {
  user:Patient=new Patient();
  // Add a function to handle form submission if needed

  constructor(private patientService: PatientserviceService,private router:Router) {}
  formSubmit() {
    this.patientService.upload(this.user).subscribe(
      (data) => {
        console.log('Upload successful:', data);
        console.log(data);
        this.patientService.patientId.next(data.id);  
        Swal.fire('Successfully Done!!','patient id is'+this.user.id,'success');
        this.router.navigate(['patientdashboard']);
     

      },
      (error) => {
        console.error('Error during upload:', error);
        // Handle error, e.g., display an error message
      }
    );
  }


  onFileSelected(event: any) {
    alert("upload")

    this.user.imageName = event.target.files[0];
    console.log(this.user.imageName);

  }
}


