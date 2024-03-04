import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { UserRequest } from 'src/app/payload/Request/userRequest';
import { UserServiceService } from 'src/app/services/user/user-service.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  constructor(  private userService:UserServiceService, private snack:MatSnackBar,private router: Router,private fb:FormBuilder){

  }
  ngOnInit(): void {
  this.checkReegisterFormValidation();
  }

user:UserRequest=new UserRequest;
regForm!:FormGroup;
checkReegisterFormValidation()
{
  this.regForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]], // Minimum length set to 3 characters
    password: ['', [Validators.required, Validators.minLength(6)]], // Minimum length set to 6 characters
    email: ['', [Validators.required, Validators.pattern(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  )]], // Email validation
    roleId: ['', [Validators.required]]

   })
}


  onSubmit() {
    localStorage.setItem('user',JSON.stringify(this.user));
   this.regForm.markAllAsTouched();
   if(!this.regForm.valid)
   {
    return;
   }
 //addUser:UserService
this.userService.addUser(this.user).subscribe(
  (data:any)=>{ //success


    console.log(data);
   // alert('success');
   if(data.statusCodeValue==400){
   Swal.fire(data.body.message ,'error')
   return;
   }
   this.router.navigate(['/otp']);
  },
  (error)=>{
    //error
    console.log(error);
    this.snack.open("something went wrong (laugh) ",'',{duration:3000 });
   //Swal.fire('successfully done !!','user id is ','success')
    }
);
  }
}
