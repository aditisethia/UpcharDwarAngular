import { Patient } from 'src/app/entity/Patient';
import { Component, OnInit } from '@angular/core';
import { DoctorScheduleService } from 'src/app/services/doctor-schedule.service';
import { PatientserviceService } from 'src/app/services/patient-service/patientservice.service';
import { DoctorserviceService } from 'src/app/services/doctor-service/doctorservice.service';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user/user-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-patient-profile-setting',
  templateUrl: './patient-profile-setting.component.html',
  styleUrls: ['./patient-profile-setting.component.css']
})
export class PatientProfileSettingComponent implements OnInit {

  patient: Patient = new Patient;
  newpatient: Patient = new Patient;
  IMG_URLs = this.doctorService.IMAGE_URL;
  patientid: any;
  constructor(private router: Router, private userservivce: UserServiceService, private patientservice: PatientserviceService, private doctorService: DoctorserviceService) { }

  ngOnInit(): void {
    var userString = localStorage.getItem('user');
    if (userString) {
      var user = JSON.parse(userString);
      console.log(user.email + user.id);
      if (user.email) {
        this.patientservice.getpatientbyemail(user.email).subscribe((data: any) => {
          console.log(data);
          this.patient = data;
          this.newpatient=this.patient;
          this.patientid = this.patient.id;
          // alert(this.patientid)
        });
      }
    }
  }




  confirmation() {
    Swal.fire({
      title: 'Update',
      text: 'Are you sure want to update Details.',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6' ,
      confirmButtonText: 'Yes👍🏻 '
    }).then((result) => {
      if (result.isConfirmed) {
        this.onSubmit();
      }
    });
  }

  // Add a function to handle form submission if needed
  onSubmit() {
    // Your form submission logic
    // alert("Onsubmit")
    console.log("this is on submit ");
    console.log(this.newpatient);
    this.patientservice.update(this.patientid,this.newpatient).subscribe(
      (data) => {
        console.log('Upload successful:', data);
        console.log(data);
        Swal.fire('Successfully Updated!!','Updated','success');
      },
      (error) => {
        console.error('Error during upload:', error);
        // Handle error, e.g., display an error message
      }
    );
  }

  previewimage: any;
  onFileSelected(event: any) {
    this.newpatient.imageName = event.target.files[0];
    console.log(this.patient.imageName);
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.previewimage = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

}
