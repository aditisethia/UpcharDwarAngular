import { Patient } from 'src/app/entity/Patient';
import { LoginService } from 'src/app/services/user/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientserviceService } from 'src/app/services/patient-service/patientservice.service';
import { DoctorserviceService } from 'src/app/services/doctor-service/doctorservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-patient-sidebar',
  templateUrl: './patient-sidebar.component.html',
  styleUrls: ['./patient-sidebar.component.css']
})
export class PatientSidebarComponent implements OnInit {

  email!: string;
  patient: Patient = new Patient;


  constructor(private doctorService: DoctorserviceService, private router: Router, private loginService: LoginService, private patientservice: PatientserviceService) { }
  IMG_URLs = this.doctorService.IMAGE_URL;



  ngOnInit(): void {
    var userString = localStorage.getItem('user');

    if (userString) {
      var user = JSON.parse(userString);
      // console.log(user.email + user.id);
      this.email = user.email;
      if (user.id) {
        sessionStorage.setItem('email',this.email)

        this.patientservice.getpatientbyemail(this.email).subscribe((patient: any) => {

          this.patient = patient;
          // console.log(patient);

        })

      }
    }
  }
  logout() {
    this.loginService.logout();
  }

  confirmLogout() {
    Swal.fire({
      title: 'Logout',
      text: 'Are you sure you want to logout?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6' ,
      confirmButtonText: 'Yes, logout!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.logout();
      }
    });
  }


}
