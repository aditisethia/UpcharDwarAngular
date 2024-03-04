import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/entity/Patient';
import { PatientserviceService } from 'src/app/services/patient-service/patientservice.service';
import { UserServiceService } from 'src/app/services/user/user-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.css']
})
export class PatientRegistrationComponent implements OnInit{
  user:Patient=new Patient();
  useremail:any;
  patientfetched: Patient = new Patient;
   dob = new Date();  // Replace this with your actual date

  // Add a function to handle form submission if needed

  constructor(private patientService: PatientserviceService,private router:Router,private userservivce:UserServiceService) {}
  ngOnInit(): void {
    var userString = localStorage.getItem('user');

    if (userString) {
      var users = JSON.parse(userString);
      // console.log(user.email + user.id);


      this.patientfetched.patientName=users.name;
      this.patientfetched.email=users.email;
      }
    }


    calculateAge(dob: Date): number {
      const today: Date = new Date();
      const birthDate: Date = new Date(dob);

      let age: number = today.getFullYear() - birthDate.getFullYear();
      const monthDiff: number = today.getMonth() - birthDate.getMonth();

      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }

      return age;
    }



  formSubmit() {
    console.log(this.user);

    const dob: Date = this.dob; // Assuming this.dob is a valid Date object
    const age: number = this.calculateAge(dob);

    console.log('Age:', age);

    this.user.age=age;
    this.user.patientName=this.patientfetched.patientName;
    this.user.email=this.patientfetched.email;
    this.patientService.upload(this.user).subscribe(
      (data) => {
        console.log('Upload successful:', data);
        console.log(data);
        this.patientService.patientId.next(data.id);
        Swal.fire('Successfully Done!!','patient id is'+this.user.id,'success');
        this.router.navigate(['/patientmaindashboard/patientdashboard']);


      },
      (error) => {
        console.log(this.user);

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


