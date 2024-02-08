import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Doctor } from 'src/app/entity/Doctor';
import { AppointmentListResponse } from 'src/app/payload/response/Response/AppointmentListResponse';
import { PageAppointmentResponse } from 'src/app/payload/response/Response/pageAppointmentResponse';
import { LabServiceService } from 'src/app/services/Lab-service/lab-service.service';
import { DoctorScheduleService } from 'src/app/services/doctor-schedule.service';
import { AppointmentserviceService } from 'src/app/services/doctor-service/appointmentservice.service';

@Component({
  selector: 'app-doctor-appointments',
  templateUrl: './doctor-appointments.component.html',
  styleUrls: ['./doctor-appointments.component.css']
})
export class DoctorAppointmentsComponent implements OnInit {

  drid: any;
  doctor: Doctor = new Doctor();
  appointments: AppointmentListResponse[] = []; // Assuming the data structure for patients

  IMG_URLs = this.labService.IMAGE_URL;
  constructor(private labService:LabServiceService,private scheduleservice: DoctorScheduleService,private appointmentService: AppointmentserviceService) {}

  viewAppointmentDetails(appointment: any) {
    // Logic to  viewing appointment details
    console.log('View details for:', appointment);
  }

  acceptAppointment(appointment: any) {
    // Logic to  accept
    console.log('Accept appointment:', appointment);
  }

  cancelAppointment(appointment: any) {
    // Logic to cancel
  //   console.log('Cancel appointment:', appointment);
   }


  ngOnInit(): void {
    var userString = localStorage.getItem('user');

    if (userString) {
      var user = JSON.parse(userString);
      console.log(user.email + user.id);

      if (user.id) {
        this.scheduleservice.getdoctorbyuserid(user.id).subscribe((data: any) => {
          this.doctor = data.doctor;
          this.drid = data.doctor.id;

          this.getAllAppointmentOfDoctor();
          console.log(data);


        });
      }
    }

  }



getAllAppointmentOfDoctor(){

  console.log("hello");

console.log(this.drid);

  this.appointmentService.getDoctorAppointments(this.drid,this.pageNo,this.pageSize).subscribe(
    (data: any) => {
         this.appointments = data.content;
         console.log("at appointment controller");

           console.log(data);

        },
        (error) => {
           console.error(error);
        }
  )
}





    pageNo = 0; // Replace with your actual page number
     pageSize = 5; // Replace with your actual page size
    sortBy = 'id'; // Replace with your actual sort field
length = 50;
pageIndex = 0;
pageSizeOptions = [1, 2, 5];

hidePageSize = false;
showPageSizeOptions = true;
showFirstLastButtons = true;
disabled = false;
pageEvent!: PageEvent;

handlePageEvent(e: PageEvent) {
  this.pageEvent = e;
  this.length = e.length;
  this.pageSize = e.pageSize;
  this.pageIndex = e.pageIndex;

    this.getAllAppointmentOfDoctor();
}

}
