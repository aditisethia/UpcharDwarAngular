import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { LabTestListResponse } from 'src/app/payload/response/LabTestListResponse';
import { PageAppointmentResponse } from 'src/app/payload/response/pageAppointmentResponse';
import { LabServiceService } from 'src/app/services/Lab-service/lab-service.service';
import { LabTestService } from 'src/app/services/Lab-service/lab-test.service';

@Component({
  selector: 'app-patient-lab-test-list',
  templateUrl: './patient-lab-test-list.component.html',
  styleUrls: ['./patient-lab-test-list.component.css']
})
export class PatientLabTestListComponent implements OnInit {

 labId:number=0;
 labTests:LabTestListResponse[]=[];


   constructor(private labService: LabServiceService,private _route: ActivatedRoute,private labTestService:LabTestService,private route:Router){}
  ngOnInit(): void {
   this.getAllTestOfLab()
  }
   
     getAllTestOfLab(){
    this.labId= this._route.snapshot.params['id'];
    console.log(this.labId);
    this.labService.getAllLabTestOfLab(this.pageNo,this.pageSize,this.sortBy ,this.labId).subscribe(
      (data: PageAppointmentResponse) => {
           this.labTests = data.contents;
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
    
      this.getAllTestOfLab();
  }
  
}
