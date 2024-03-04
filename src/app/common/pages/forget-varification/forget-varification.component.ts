import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ResetPasswordRequest } from 'src/app/payload/Request/ResetPassword_Request';
import { ForgetpasswordService } from 'src/app/services/user/forgetpassword.service';
import { OtpServiceService } from 'src/app/services/user/otp-service.service';
import Toast from 'src/app/utils/Sweet-alert-message';

@Component({
  selector: 'app-forget-varification',
  templateUrl: './forget-varification.component.html',
  styleUrls: ['./forget-varification.component.css']
})
export class ForgetVarificationComponent {

  forgetPassword:ResetPasswordRequest=new ResetPasswordRequest();
  
  constructor(private forgetPasswordService:ForgetpasswordService,private snack:MatSnackBar,private router:Router){}
  ngOnInit(): void {
   
    localStorage.clear();
  }
  formSubmit(){
   
 
    if(this.forgetPassword.email.trim()=='' || this.forgetPassword.email==null)
    {
      
      this.snack.open('email is required !!','',{
        duration:3000,
      });
      return;
    }
    alert(this.forgetPassword.email)
    this.forgetPasswordService.generateOtp(this.forgetPassword.email).subscribe((data:any)=>
    {
     alert(this.forgetPassword.email)
      if(data.message=="Otp Send successfully"){
        
      localStorage.setItem('email',this.forgetPassword.email);
        Toast.fire({
          icon: 'success',
          title: data.message,
       
        })
        this.router.navigate(['otpforgetpassword']);
      }

      else{
        Toast.fire({
          icon: 'error',
          title: data.message,
       
        })
        this.router.navigate(['verify-otp-for-forget-password']);
      }
   
    
  
    }
    
    );
  }
  
}
