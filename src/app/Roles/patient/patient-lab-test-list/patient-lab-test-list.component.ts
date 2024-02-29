import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';

import { Lab } from 'src/app/entity/Lab';
import { LabAppointment_Request } from 'src/app/payload/Request/LabAppointment_Request';
import { LabTestListResponse } from 'src/app/payload/response/Response/LabTestListResponse';
import { PageAppointmentResponse } from 'src/app/payload/response/Response/pageAppointmentResponse';
import { LabAppointmentServiceService } from 'src/app/services/Lab-service/lab-appointment-service.service';



import { LabServiceService } from 'src/app/services/Lab-service/lab-service.service';
import { LabTestService } from 'src/app/services/Lab-service/lab-test.service';
import { PatientserviceService } from 'src/app/services/patient-service/patientservice.service';
import { LoginService } from 'src/app/services/user/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-patient-lab-test-list',
  templateUrl: './patient-lab-test-list.component.html',
  styleUrls: ['./patient-lab-test-list.component.css']
})
export class PatientLabTestListComponent implements OnInit {

  labId: number = 0;
  pemail: string = '';
  lab: Lab = new Lab;
  labTests: LabTestListResponse[] = [];
  labAppointmentRequest: LabAppointment_Request = new LabAppointment_Request;
  todaydate: string | undefined;

  constructor(private labService: LabServiceService,
    private _route: ActivatedRoute,
    private labTestService: LabTestService,
    private route: Router, private loginService: LoginService,
    private patientService: PatientserviceService,
    private appointmentService: LabAppointmentServiceService,
    private router: ActivatedRoute) { }
  ngOnInit(): void {
    this.labId = this._route.snapshot.params['id'];

    this.labService.getLabByLabId(this.labId).subscribe(
      (data: any) => {
        this.lab = data.Lab;
        this.labAppointmentRequest.lab = this.lab;
        this.labAppointmentRequest.labName=this.lab.labName;
      }
    );


    this.loginService.getCurrentUser().subscribe((currentuser: any) => {
      // this.AppointMentRequest.patient = currentuser.id;
      this.pemail = currentuser.email;
      if (this.pemail !== null) {
        this.getpatientbyemail();
      }

    });
    this.getAllTestOfLab()
  }



  getpatientbyemail() {

    //console.log(this.pemail);
    this.patientService.getpatientbyemail(this.pemail).subscribe((data: any) => {
      this.labAppointmentRequest.patient = data;
      console.log("hello");



    })

    this.getdate();

  }




     getAllTestOfLab(){
    this.labId= this._route.snapshot.params['id'];

    console.log(this.labId);
    this.labService.getAllLabTestOfLab(this.pageNo, this.pageSize, this.sortBy, this.labId).subscribe(
      (data: PageAppointmentResponse) => {
        this.labTests = data.contents;
        //  this.length=data.totalElements;
      },
      (error) => {
        console.error(error);
      }
    )
  }

  getdate() {
    const currentDate: Date = new Date();

    const year: number = currentDate.getFullYear();
    const month: number = currentDate.getMonth() + 1; // Note: Months are zero-indexed, so add 1
    const day: number = currentDate.getDate();

    const formattedDate: string = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    this.todaydate = formattedDate;

    this.labAppointmentRequest.appointmentDate = this.todaydate;
    console.log("Current Date:", formattedDate);
  }



  selectLAbTest(labTestId: number) {

    // this.AppointMentRequest.timeslote.id = timeSlot;
    this.labTestService.getLabTestById(labTestId).subscribe((data: any) => {
      this.labAppointmentRequest.labTest = data.LABTEST;
      console.log(data);

    })

  }

  bookLabTest(labTestId: number){
    this.labTestService.getLabTestById(labTestId ).subscribe((data: any) => {
      this.labAppointmentRequest.labTest = data.LABTEST;
      console.log(data);

    })
    Swal.fire({
      title: 'Enter Purpose Of Appointment:',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Submit',
      showLoaderOnConfirm: true,
      preConfirm: (inputValue) => {
        if (!inputValue) {
          Swal.showValidationMessage('You need to enter something!');
        }
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result: any) => {
      if (result.isConfirmed || this.labAppointmentRequest.lab !== null || this.labAppointmentRequest.patient !== null || this.labAppointmentRequest.labTest !== null) {
        const inputValue = result.value;
        this.labAppointmentRequest.purpose = inputValue;
        this.labAppointmentRequest.lab.id=this.labId;
        this.labAppointmentRequest.labId=this.labId;
        console.log(this.labAppointmentRequest.lab.id+"-------------->");
        console.log(this.labId);
        
        
        console.log(this.labAppointmentRequest);
        this.appointmentService.setAppointmentData(this.labAppointmentRequest);

        this.route.navigate(['/patientmaindashboard/labcheckout'])

      }
    });

  
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
    this.pageNo = e.pageIndex;
    this.pageSize = e.pageSize;

  

      this.getAllTestOfLab();
  }

}
