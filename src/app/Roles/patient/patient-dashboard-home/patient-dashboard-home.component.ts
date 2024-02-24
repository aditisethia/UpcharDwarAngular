import { Appointment_Request } from 'src/app/payload/Request/Appointment_Request ';
import { Component, OnInit } from '@angular/core';
import { AppointmentserviceService } from 'src/app/services/doctor-service/appointmentservice.service';
import { DoctorserviceService } from 'src/app/services/doctor-service/doctorservice.service';
import { UserServiceService } from 'src/app/services/user/user-service.service';
import { Patient } from 'src/app/entity/Patient';

@Component({
  selector: 'app-patient-dashboard-home',
  templateUrl: './patient-dashboard-home.component.html',
  styleUrls: ['./patient-dashboard-home.component.css']
})
export class PatientDashboardHomeComponent implements OnInit {

  appointments: any[] | undefined;
  public prescriptions: any[] = [];
  public medicalRecords: any[] = [];
  public billingRecords: any[] = [];
  useremail: any;
  id: any;
  Appointment_Request: Appointment_Request[] = [];
  patient: Patient = new Patient;
  page = 0;
  size = 10;

  constructor(private userservivce: UserServiceService, private appointmentService: AppointmentserviceService, private doctorService: DoctorserviceService) { }
  IMG_URLs = this.doctorService.IMAGE_URL;

  ngOnInit(): void {

    var userString = localStorage.getItem('user');

    if (userString) {
      var user = JSON.parse(userString);
      // console.log(user.email + user.id);
      this.useremail = user.email;
      if (user.email) {
        this.userservivce.getpatientbyusergmail(this.useremail).subscribe((data: any) => {
          this.patient = data;
          this.patient.id = data.id;
          this.id = data.id;
          // console.log("'test------->>>>>>>>>>>>>>.'");

          // console.log(data);

          if (this.id) { this.getAppointments(this.id); }

        });
      }
    }

  }

  getAppointments(id: any): void {
    this.appointmentService.getAppointmentsByPatientId(id, this.page, this.size)
      .subscribe((data: any) => {
        this.Appointment_Request = data.content;
        // console.log("hello");
        // console.log(this.Appointment_Request);

        // console.log(data);

      });


  }

  getStatusBadgeClass(status: string): string {
    // Define logic to determine the badge class based on appointment status
    return status === 'Confirm' ? 'bg-success-light' : (status === 'Pending' ? 'bg-warning-light' : 'bg-danger-light');
  }
}
