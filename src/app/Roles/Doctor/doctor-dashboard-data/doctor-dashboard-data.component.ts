import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppointMentRequest } from 'src/app/payload/Request/AppointmentRequest';
import { DoctorserviceService } from 'src/app/services/doctor-service/doctorservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-doctor-dashboard-data',
  templateUrl: './doctor-dashboard-data.component.html',
  styleUrls: ['./doctor-dashboard-data.component.css']
})
export class DoctorDashboardDataComponent implements OnInit {

  getTotalPetient: number = 0;

  dashWidgets = [
    { icon: 'assets/img/icon-01.png', title: 'Total Patient', value: 1500, subtitle: 'Till Today', percentage: 75 },
    { icon: 'assets/img/icon-02.png', title: 'Today Patient', value: 160, subtitle: '06, Nov 2019', percentage: 65 },
    { icon: 'assets/img/icon-03.png', title: 'Appointments', value: 85, subtitle: '06, Apr 2019', percentage: 50 }
  ];

  constructor(private _doctorService: DoctorserviceService) {

  }


  upcomingAppointments: AppointMentRequest[] | undefined; // Replace 'any' with your actual data type
  todayAppointments: AppointMentRequest[] | undefined; // Replace 'any' with your actual data type

  ngOnInit() {


    this.getUpcomingAppointments();

    // [
    //   { patientName: 'Richard Wilson', appointmentDate: '16 Nov 2019', purpose: 'General', appointmentType: 'New Patient', paidAmount: '$150', patientAvatar: 'assets/img/patients/patient1.jpg' },
    //   { patientName: 'aman patidar', appointmentDate: '15 Nov 2019', purpose: 'fever', appointmentType: 'old Patient', paidAmount: '$110', patientAvatar: 'assets/img/patients/patient2.jpg' },
    //   { patientName: 'jay solanki', appointmentDate: '15 Nov 2019', purpose: 'General', appointmentType: 'New Patient', paidAmount: '$200', patientAvatar: 'assets/img/patients/patient3.jpg' },
    //   { patientName: 'rohit  sharma', appointmentDate: '17 Nov 2019', purpose: 'General', appointmentType: 'New Patient', paidAmount: '$500', patientAvatar: 'assets/img/patients/patient4.jpg' },
    //   { patientName: 'kapil solanki', appointmentDate: '18 Nov 2019', purpose: 'General', appointmentType: 'New Patient', paidAmount: '$750', patientAvatar: 'assets/img/patients/patient5.jpg' },
    //   // Add more upcoming appointments
    // ];

    // this.todayAppointments = [
    //   { patientName: 'jay solanki', appointmentDate: '11 Nov 2019', purpose: 'General', appointmentType: 'New Patient', paidAmount: '$200', patientAvatar: 'assets/img/patients/patient3.jpg' },
    //   { patientName: 'rohit  sharma', appointmentDate: '11 Nov 2019', purpose: 'General', appointmentType: 'New Patient', paidAmount: '$500', patientAvatar: 'assets/img/patients/patient4.jpg' },
    //   { patientName: 'kapil solanki', appointmentDate: '11 Nov 2019', purpose: 'General', appointmentType: 'New Patient', paidAmount: '$750', patientAvatar: 'assets/img/patients/patient5.jpg' },
    //   { patientName: 'Richard Wilson', appointmentDate: '11 Nov 2019', purpose: 'General', appointmentType: 'New Patient', paidAmount: '$150', patientAvatar: 'assets/img/patients/patient1.jpg' },
    //   { patientName: 'aman patidar', appointmentDate: '11 Nov 2019', purpose: 'fever', appointmentType: 'old Patient', paidAmount: '$110', patientAvatar: 'assets/img/patients/patient2.jpg' },

    // ];
    this.getTotalPetientTillToday();

    this.getTodaysTotalpetient();

  this. getTotalUpcomingAppointments();

  this.getTodaysAppointments();
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

  getTotalUpcomingAppointments() {
    this._doctorService.getTotalUpcomingAppointment().subscribe(
      (data: any) => {
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

  getUpcomingAppointments() {
    this._doctorService.getUpcomingAppointment().subscribe(
      (data: any) => {
        // Update the Total Patient value in dashWidgets

       this.upcomingAppointments = data.upcomingAppointment || [];
       console.log(data);
       console.log(data.id+"hello at id test")

        }
      ,
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }


  getTodaysAppointments() {
    this._doctorService.getTodaysAppointment().subscribe(
      (data: any) => {
        // Update the Total Patient value in dashWidgets

       this.todayAppointments= data.todaysAppointment || [];
       console.log(data);
       console.log(data.id+"hello at id test")


        }
      ,
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  cancelAppointment(appointmentId: number): void {
    this._doctorService.cancelAppointment(appointmentId).subscribe(
      response => {
        console.log('Appointment canceled successfully:', response);
        Swal.fire("cancelled","cancel","success");
        // Handle the response as needed
      },
      (      error: any) => {
        console.error('Error canceling appointment:', error);
        // Handle errors
      }
    );
  }
  }



