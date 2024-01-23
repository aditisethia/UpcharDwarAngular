import { Component, OnInit } from '@angular/core';

import { ScheduleRequest } from 'src/app/payload/Request/ScheduleRequest';
import { DoctorScheduleService } from 'src/app/services/doctor-schedule.service';

import { Doctor } from 'src/app/entity/Doctor';
import { LabServiceService } from 'src/app/services/Lab-service/lab-service.service';
import { LoginService } from 'src/app/services/user/login.service';

@Component({
  selector: 'app-doctor-profile-sidebar',
  templateUrl: './doctor-profile-sidebar.component.html',
  styleUrls: ['./doctor-profile-sidebar.component.css']
})
export class DoctorProfileSidebarComponent implements OnInit{


  ScheduleRequest: ScheduleRequest[] | undefined;
  drid: any;
  doctor: Doctor = new Doctor();

  constructor(private scheduleservice: DoctorScheduleService,private labService:LabServiceService,private loginService:LoginService) { }
  IMG_URLs = this.labService.IMAGE_URL;

  ngOnInit(): void {
    var userString = localStorage.getItem('user');

    if (userString) {
      var user = JSON.parse(userString);
      console.log(user.email + user.id);

      if (user.id) {
        this.scheduleservice.getdoctorbyuserid(user.id).subscribe((data: any) => {
          this.doctor = data.doctor;
          this.drid = data.doctor.id;
          console.log(data);


        });
      }
    }
  }

  // logout user
  logOut(){
   this.loginService.logout();
  }

}
