// lab-dashboard.component.ts

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateLabTestRequest } from 'src/app/payload/CreateLabTestRequest';
import { LabRegistrationResponse } from 'src/app/payload/response/LabRegistrationResponse';
import { LabServiceService } from 'src/app/services/Lab-service/lab-service.service';
import { LabTestService } from 'src/app/services/Lab-service/lab-test.service';
import { LoginService } from 'src/app/services/user/login.service';


@Component({
  selector: 'app-lab-dashboard',
  templateUrl: './lab-dashboard.component.html',
  styleUrls: ['./lab-dashboard.component.css']
})
export class LabDashboardComponent implements OnInit {
  userId: any;
  lab!: LabRegistrationResponse;
  labTest: any = new CreateLabTestRequest();
  user: any;
  constructor(
    private loginService: LoginService,
    private ltService: LabTestService,
    private _route: Router,
    private labService: LabServiceService // Inject LabService
  ) { }

  ngOnInit(): void {
    this.loginService.getCurrentUser().subscribe((data: any) => {
      this.user = data;
      this.getLab(this.user.id);
    });
  }

  getLab(userId: any): void {

    // Use the lab$ observable from LabService to get the lab data
    this.labService.lab.subscribe((data: any | null) => {
      this.lab = data;
      this.labTest.labId = this.lab.id;
      alert("value")
      console.log(this.lab);

      // } else {
      //   console.log('Lab Data not available');
      // }
    });
  
  //Call the getLabByUserId method from LabService

    this.labService.getLabByUserId(this.user.id).subscribe((response: LabRegistrationResponse | null) => {
      // The lab data will be automatically emitted to the observable
      // You can also handle the response if needed'
      this.labService.labSubject.next(response);
      console.log('Response from getLabByUserId:', response);
    });
   
}
}