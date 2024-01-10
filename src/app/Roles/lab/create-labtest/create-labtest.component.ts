import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router, Routes } from '@angular/router';
import { Lab } from 'src/app/entity/Lab';
import { LabTest } from 'src/app/entity/LabTest';
import { CreateLabTestRequest } from 'src/app/payload/Request/CreateLabTestRequest';
import { LabRegistrationResponse } from 'src/app/payload/response/Response/LabRegistrationResponse';
import { LabTestService } from 'src/app/services/Lab-service/lab-test.service';
import { LoginService } from 'src/app/services/user/login.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-create-labtest',
  templateUrl: './create-labtest.component.html',
  styleUrls: ['./create-labtest.component.css']
})
export class CreateLabtestComponent implements OnInit{
  // labTest: any = {
  //   // Initialize with default values or an empty object
  //   rating: 0,
  //   location: '',
  //   availability: '',
  //   feeRange: '',
  //   description: '',
  //   price: '',
  //   name:'',
  //   email:'',
  //   // Add other properties based on your actual LabTest model
  // };

  userId:any;
  lab!:LabRegistrationResponse;
  labTest:any=new CreateLabTestRequest();


  constructor(private loginService: LoginService , private ltService:LabTestService , private _route:Router){}



  ngOnInit(): void {
    this.loginService.getCurrentUser().subscribe((data:any)=>
    {
     this.userId=data;
     console.log(data);
     console.log(this.userId.id+"hello");
     this.getLab(this.userId.id);

  });



  }


   getLab(userid:any){
    console.log(userid+"getlab");

  this.ltService.getLabByUserId(userid).subscribe((data:any)=>{
    console.log(data);

    this.lab=data.Lab;
     this.labTest.labId=this.lab.id;
    // console.log(data);


      });
    }


  saveLabTestChanges() {
    console.log(this.labTest);

    this.ltService.createLabTest(this.labTest).subscribe(
      (data:any) => {

        Swal.fire('Lab Test created successfully:');
        console.log('Lab Test created successfully:', data);
        this._route.navigate(["/labdashboard/labslist"]);
        // Handle success, e.g., navigate to another page
      },
      (error) => {
       alert("error");
        // Handle error, show error message, etc.
      }

    );
  }
}
