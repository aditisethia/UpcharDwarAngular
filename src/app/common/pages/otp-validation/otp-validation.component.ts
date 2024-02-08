import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OtpServiceService } from 'src/app/services/user/otp-service.service';

@Component({
  selector: 'app-otp-validation',
  templateUrl: './otp-validation.component.html',
  styleUrls: ['./otp-validation.component.css']
})
export class OtpValidationComponent implements OnInit {

  constructor(private _verify:OtpServiceService ,private router:Router,){
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
    //alert(this.email)
    if (this.email != undefined || this.email != null)
    //this.otp = this.otp1 + this.otp2 + this.otp3 + this.otp4;
     //alert(this.otp)
 
   
     this._verify.verify(this.otpregistration).subscribe(
      response => {
        console.log('Verification success:', response);
        //localStorage.getItem('userEmail');
        this.router.navigate(['/login'])
        // Handle success, e.g., display a success message
      },
      error => {
        console.log(error);
        // console.error('Verification error:', error);
        // Handle error, e.g., display an error message
      }
    )
     

    
  }


   

 
  ngOnInit(): void {
   let emailStr =  localStorage.getItem('userEmail')
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
