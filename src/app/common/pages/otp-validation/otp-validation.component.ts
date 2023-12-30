import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OtpServiceService } from 'src/app/services/user/otp-service.service';

@Component({
  selector: 'app-otp-validation',
  templateUrl: './otp-validation.component.html',
  styleUrls: ['./otp-validation.component.css']
})
export class OtpValidationComponent implements OnInit {

otpregistration={
  email:"",
  otp:"",
}

  verificationMessage: string | undefined;



  
  
  
  
  //email:any="";
  //otp:any="";
  
  otpFirst: any = '';
  otpSecond: any = '';
  otpThird: any = '';
  otpFourth: any = '';

   

  constructor(private _verify:OtpServiceService ,private router:Router,){
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

 

  // Function to verify the email using the entered OTP
  // verifyEmail() {
  //   // Implement your verification logic here using the 'this.otp' value
  //   const fullOTP = this.otpFirst + this.otpSecond + this.otpThird + this.otpFourth;
  //   console.log('Verifying email with OTP:',fullOTP);
  // }
  verifyEmail():void{
    //this.email=localStorage.getItem('email');
    console.log("******")
    this.otpregistration.otp = this.otpFirst + this.otpSecond + this.otpThird + this.otpFourth;
   
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

    
}
