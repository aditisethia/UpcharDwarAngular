import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { LabRegistrationResponse } from 'src/app/payload/response/LabRegistrationResponse';
import { LabTestListResponse } from 'src/app/payload/response/LabTestListResponse';
import { PageAppointmentResponse } from 'src/app/payload/response/pageAppointmentResponse';
import { LabServiceService } from 'src/app/services/Lab-service/lab-service.service';
import { LabTestService } from 'src/app/services/Lab-service/lab-test.service';

@Component({
  selector: 'app-list-lab-test',
  templateUrl: './list-lab-test.component.html',
  styleUrls: ['./list-lab-test.component.css']
})
export class ListLabTestComponent implements OnInit{

  lab!: LabRegistrationResponse;

  labId:any;
  labTests:LabTestListResponse[]=[];

  constructor(private labService: LabServiceService,private labTestService:LabTestService) {
    this.lab = new LabRegistrationResponse();
  }

  ngOnInit(): void 
  {
    
    this.labService.lab.subscribe((data: any) => {
      this.lab = data.Lab;
      this.labId=this.lab.id;
      console.log(data.Lab);
      
      
      
      console.log(this.labId+"labIDINLIST");
    });

    this.getAllTestOfLab()
  
  }
 

getAllTestOfLab(){
  console.log(this.labId+"heyy")
  
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

  

  // labTests: any[] = [
  //   {
  //     name: 'sugarTest',
  //     image: 'https://altahealthgroup.com/wp-content/uploads/2016/12/lab-tests-1024x768.jpg',
    
  //     rating: 4.5,
  //     location: 'City X',
  //     availability: 'Mon-Fri, 9 AM - 5 PM',
  //     feeRange: '$50 - $100',
  //     description: 'Pathology is the study of disease and injury. The word pathology also refers to the study of disease in general, incorporating a wide range of biology research fields and medical practices.',
  //     price: '$60',
  //     rate: 'Normal',
     
  //   },
  //   {
  //     name: 'minority',
  //     image: 'https://altahealthgroup.com/wp-content/uploads/2016/12/lab-tests-1024x768.jpg',
    
  //     rating: 4.5,
  //     location: 'City X',
  //     availability: 'Mon-Fri, 9 AM - 5 PM',
  //     feeRange: '$50 - $100',
  //     description: 'Pathology is the study of disease and injury. The word pathology also refers to the study of disease in general, incorporating a wide range of biology research fields and medical practices.',
  //     price: '$60',
  //     rate: 'Normal',
      
  //     proceed: true,
  //   },
  //   {
  //     name: 'linci',
  //     image: 'https://altahealthgroup.com/wp-content/uploads/2016/12/lab-tests-1024x768.jpg',
      
  //     rating: 4.5,
  //     location: 'City X',
  //     availability: 'Mon-Fri, 9 AM - 5 PM',
  //     feeRange: '$50 - $100',
  //     description: 'Pathology is the study of disease and injury. The word pathology also refers to the study of disease in general, incorporating a wide range of biology research fields and medical practices.',
  //     price: '$60',
  //     rate: 'Normal',
      
  //     proceed: true,
  //   },
  //   {
  //     name: 'lababajdh',
  //     image: 'https://altahealthgroup.com/wp-content/uploads/2016/12/lab-tests-1024x768.jpg',
    
  //     rating: 4.5,
  //     location: 'City X',
  //     availability: 'Mon-Fri, 9 AM - 5 PM',
  //     feeRange: '$50 - $100',
  //     description: 'Pathology is the study of disease and injury. The word pathology also refers to the study of disease in general, incorporating a wide range of biology research fields and medical practices.',
  //     price: '$60',
  //     rate: 'Normal',
     
  //     proceed: true,
  //   },
    
 // ];
  



  
 
}
