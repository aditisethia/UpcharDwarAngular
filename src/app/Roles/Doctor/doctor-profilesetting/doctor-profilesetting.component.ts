
import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/entity/Doctor';
import { LabServiceService } from 'src/app/services/Lab-service/lab-service.service';
import { DoctorScheduleService } from 'src/app/services/doctor-schedule.service';
import { DoctorserviceService } from 'src/app/services/doctor-service/doctorservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-doctor-profilesetting',
  templateUrl: './doctor-profilesetting.component.html',
  styleUrls: ['./doctor-profilesetting.component.css']
})
export class DoctorProfilesettingComponent implements OnInit{
  user: Doctor = new Doctor;
  doctor: Doctor = new Doctor;
  IMG_URLs = this.labservice.IMAGE_URL;
  doctorId:any;

  constructor(private doctorservice: DoctorScheduleService,private labservice:LabServiceService){}

  ngOnInit(): void {
    var userString = localStorage.getItem('user');
    if (userString) {
      var user = JSON.parse(userString);
      console.log(user.email + user.id);
      if (user.email) {
        this.doctorservice.getdoctorbyuserid(user.id).subscribe((data: any) => {
          console.log(data);
           this.doctor = data.doctor;
           this.doctorId=this.doctor.id;
  console.log(this.doctor);

          // alert(this.user)
        });
      }
    }
  }


  saveChanges(){

    console.log("this is on submit ");

    this.doctorservice.update(this.doctorId,this.doctor).subscribe(
      (data:any) => {
        console.log('Upload successful:', data);
        console.log(data);
        Swal.fire('Successfully Updated!!','Updated','success');
      },
      (error:any) => {
        console.error('Error during upload:', error);
        // Handle error, e.g., display an error message
      }
    );
  }

  previewimage: any;

  onFileSelected(event: any) {
    this.doctor.imageName = event.target.files[0];
    console.log(this.doctor.imageName);
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
