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
    // if(l)
    // this.otpregistration.email = localStorage.getItem('userEmail');
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
    const userString = localStorage.getItem('user');

    // Check if the user object exists in localStorage
    if (userString) {
        // Parse the user object from JSON
        const user = JSON.parse(userString);
    
        // Access the email property of the user object
        const userEmail = user.email;
        this.otpregistration.email = userEmail;
        console.log("User Email:", userEmail);
    } else {
        console.log("User object not found in localStorage");
    }
  

   
   }
  //  else{
  //   alert('else')
  //  }
  }

 

  


