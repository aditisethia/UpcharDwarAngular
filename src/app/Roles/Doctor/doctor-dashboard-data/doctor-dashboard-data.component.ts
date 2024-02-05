import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Appointment_Request } from 'src/app/payload/Request/Appointment_Request ';
import { LabServiceService } from 'src/app/services/Lab-service/lab-service.service';
import { DoctorScheduleService } from 'src/app/services/doctor-schedule.service';
import { AppointmentserviceService } from 'src/app/services/doctor-service/appointmentservice.service';
import { DoctorserviceService } from 'src/app/services/doctor-service/doctorservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-doctor-dashboard-data',
  templateUrl: './doctor-dashboard-data.component.html',
  styleUrls: ['./doctor-dashboard-data.component.css']
})
export class DoctorDashboardDataComponent implements OnInit {

 getTotalPetient: number = 0;
 doctorId:number=0;

  dashWidgets = [
    { icon: 'assets/img/icon-01.png', title: 'Total Patient', value: 1500, subtitle: 'Till Today', percentage: 75 },
    { icon: 'assets/img/icon-02.png', title: 'Today Patient', value: 160, subtitle: '06, Nov 2019', percentage: 65 },
    { icon: 'assets/img/icon-03.png', title: 'Appointments', value: 85, subtitle: '06, Apr 2019', percentage: 50 }
  ];

  constructor(private scheduleservice:DoctorScheduleService,private labService: LabServiceService, private _doctorService: DoctorserviceService, private appointmentservice: AppointmentserviceService) {}

  IMG_URLs = this.labService.IMAGE_URL;
  upcomingAppointments: Appointment_Request[] = []; // Replace 'any' with your actual data type
  todayAppointments: Appointment_Request[] = []; // Replace 'any' with your actual data type

  ngOnInit() {

    var userString = localStorage.getItem('user');

    if (userString) {
      var user = JSON.parse(userString);
      // console.log(user.email + user.id);
      if (user.id) {
        this.scheduleservice.getdoctorbyuserid(user.id).subscribe((data: any) => {
          this.doctorId = data.doctor.id;
          console.log("->>>>>>>>>"+this.doctorId);
          this.getUpcomingAppointments(this.doctorId);
          this.getTotalPetientTillToday();
          this.getTodaysTotalpetient();
          this.getTodaysAppointments(this.doctorId);
        });

      }

    }


  }

  getUpcomingAppointments(doctorid: any) {
    this.appointmentservice.getupcomingappointmentofdoctor(doctorid).subscribe(
      (data: any) => {
        this.upcomingAppointments = data;
        // Update the Total Patient value in dashWidgets
        const totalPatientWidget = this.dashWidgets.find(widget => widget.title === 'Appointments');
        if (totalPatientWidget) {
          totalPatientWidget.value = data.TOTALUPCOMINGAPPOINTMENTS;
          console.log(data);

        }
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }



  getTodaysAppointments(doctorId:any) {
    this.appointmentservice.gettodayappointmentofdoctor(doctorId).subscribe(
      (data: any) => {
        // Update the Total Patient value in dashWidgets

        this.todayAppointments = data;
        console.log(data);
        console.log(data.id + "hello at id test")


      }
      ,
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }



  getTotalPetientTillToday() {
    this._doctorService.getTotalPetient().subscribe(
      (data: any) => {
        // Update the Total Patient value in dashWidgets
        const totalPatientWidget = this.dashWidgets.find(widget => widget.title === 'Total Patient');
        if (totalPatientWidget) {
          totalPatientWidget.value = data.TOTAL_PETIENT;
          console.log(data.TOTAL_PETIENT)
        }
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }


  getTodaysTotalpetient() {
    this._doctorService.getTodaysPatient().subscribe(
      (data: any) => {
        // Update the Total Patient value in dashWidgets
        const totalPatientWidget = this.dashWidgets.find(widget => widget.title === 'Today Patient');
        if (totalPatientWidget) {
          totalPatientWidget.value = data.TOTAL_PETIENT;
          console.log(data.TOTAL_PETIENT)
        }
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }




  cancelAppointment(appointmentId: number): void {
    this._doctorService.cancelAppointment(appointmentId).subscribe(
      response => {
        console.log('Appointment canceled successfully:', response);
        Swal.fire("cancelled", "cancel", "success");
        // Handle the response as needed
      },
      (error: any) => {
        console.error('Error canceling appointment:', error);
        // Handle errors
      }
    );
  }
}
