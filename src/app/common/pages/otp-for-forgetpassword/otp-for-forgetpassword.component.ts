import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ForgetpasswordService } from 'src/app/services/user/forgetpassword.service';
import { OtpServiceService } from 'src/app/services/user/otp-service.service';
import Toast from 'src/app/utils/Sweet-alert-message';

@Component({
  selector: 'app-otp-for-forgetpassword',
  templateUrl: './otp-for-forgetpassword.component.html',
  styleUrls: ['./otp-for-forgetpassword.component.css']
})
export class OtpForForgetpasswordComponent {

  constructor(private _verify:ForgetpasswordService ,private router:Router){
  }

otpregistration={
  email:"",
  otp:"",
}

  verificationMessage: string | undefined;




  email: any = "";
  otp: string = '';


  onOtpChange(event:any){
this.otpregistration.otp=event;
  }
  // verify user by email and otp
  verifyEmail() {
    //this.otpregistration.email = localStorage.getItem('email');
    alert(this.email)
    if (this.email != undefined || this.email != null)
    //this.otp = this.otp1 + this.otp2 + this.otp3 + this.otp4;
     //alert(this.otp)
 
   
     this._verify.verify(this.otpregistration).subscribe(
   
       
        response => {
          if(response.body.message=="invalid"||response.body.message=="link expired"||response.body.message=="user already exist with this email"){
            Toast.fire({
              icon: 'error',
              title: response.body.message,
           
            }
            
            )
            this.router.navigate(['otpforgetpassword']);
          }
          else{
          //localStorage.getItem('userEmail');
          this.router.navigate(['/forgetchangepassword'])
          }
        }
       
      );
    
  }


   

 
  ngOnInit(): void {
   let emailStr =  localStorage.getItem('email')
   alert(emailStr)
   if(emailStr != null)
   {
    this.otpregistration.email = emailStr
    alert('if')
   }
   else{
    alert('else')
   }
  }

 

  


    
}

