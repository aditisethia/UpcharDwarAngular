import { Patient } from 'src/app/entity/Patient';
import { Component, OnInit } from '@angular/core';
import { DoctorScheduleService } from 'src/app/services/doctor-schedule.service';
import { PatientserviceService } from 'src/app/services/patient-service/patientservice.service';
import { DoctorserviceService } from 'src/app/services/doctor-service/doctorservice.service';

@Component({
  selector: 'app-patient-profile-setting',
  templateUrl: './patient-profile-setting.component.html',
  styleUrls: ['./patient-profile-setting.component.css']
})
export class PatientProfileSettingComponent implements OnInit {

  patient: Patient = new Patient;
  IMG_URLs = this.doctorService.IMAGE_URL;

  constructor(private patientservice :PatientserviceService,private doctorService:DoctorserviceService){}

  ngOnInit(): void {
    var userString = localStorage.getItem('user');

    if (userString) {
      var user = JSON.parse(userString);
      console.log(user.email + user.id);

      if (user.email) {
        this.patientservice.getpatientbyemail(user.email).subscribe((data: any) => {

          console.log(data);

          this.patient=data;

        });
      }
    }

  }



  user = {
    avatar: 'assets/img/patients/patient.jpg',
    firstName: 'Richard',
    lastName: 'Wilson',
    dob: '24-07-1983',
    bloodGroup: 'A-',
    email: 'richard@example.com',
    mobile: '+1 202-555-0125',
    address: '806 Twin Willow Lane',
    city: 'Old Forge',
    state: 'Newyork',
    zipCode: '13420',
    country: 'United States',
  };


  // Add a function to handle form submission if needed
  onSubmit() {
    // Your form submission logic
  }
}
