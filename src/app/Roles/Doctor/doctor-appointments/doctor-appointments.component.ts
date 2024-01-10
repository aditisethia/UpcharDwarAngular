import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { AppointmentListRequest } from 'src/app/payload/Request/AppointmentListRequest';
import { AppointmentListResponse } from 'src/app/payload/response/Response/AppointmentListResponse';
import { PageAppointmentResponse } from 'src/app/payload/response/Response/pageAppointmentResponse';
import { AppointmentserviceService } from 'src/app/services/doctor-service/appointmentservice.service';

@Component({
  selector: 'app-doctor-appointments',
  templateUrl: './doctor-appointments.component.html',
  styleUrls: ['./doctor-appointments.component.css']
})
export class DoctorAppointmentsComponent implements OnInit {


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
   appointments: AppointmentListResponse[] = []; // Assuming the data structure for patients

  constructor(private appointmentService: AppointmentserviceService) {}

  ngOnInit(): void {
this.getAllAppointmentOfDoctor();
  }



getAllAppointmentOfDoctor(){
  console.log('ts');

  this.appointmentService.getAllAppointmentOfDoctor(this.pageNo,this.pageSize,this.sortBy).subscribe(
    (data: PageAppointmentResponse) => {
         this.appointments = data.contents;
           this.length=data.totalElements;
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
