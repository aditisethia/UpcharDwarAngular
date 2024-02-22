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
    
      this.forgetPassword=data;
      localStorage.setItem('email',this.forgetPassword.email);
    //  Swal.fire('Successfully Done!!','','success');
      Toast.fire({
      icon: 'success',
      title: 'otp generated Succesfully',
   
    }
    
    )
    this.router.navigate(['otpforgetpassword']);
  
    },(error: any)=>{
     console.log(error);
    
    }
    
    );
  }
  
}
