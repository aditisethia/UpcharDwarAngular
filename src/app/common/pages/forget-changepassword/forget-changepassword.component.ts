import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ResetPasswordRequest } from 'src/app/payload/Request/ResetPassword_Request';
import { ForgetpasswordService } from 'src/app/services/user/forgetpassword.service';
import { UserServiceService } from 'src/app/services/user/user-service.service';
import Toast from 'src/app/utils/Sweet-alert-message';

@Component({
  selector: 'app-forget-changepassword',
  templateUrl: './forget-changepassword.component.html',
  styleUrls: ['./forget-changepassword.component.css']
})
export class ForgetChangepasswordComponent {
  email: any = "";
  newPassword: string = "";
  confirmPassword: string = "";
   resetRequest = new ResetPasswordRequest;
  constructor(private forgetService:ForgetpasswordService,private router:Router,private snack:MatSnackBar){}
  ngOnInit(): void {
  
  }


  formSubmit(){
   
  alert()
    if(this.resetRequest.email.trim()=='' || this.resetRequest.email==null)
    {
      this.snack.open('email is required !!','',{
        duration:3000,
      });
      return;
    }
  }
  changePassword() {
    this.resetRequest.email=localStorage.getItem('email');
    this.resetRequest.newPassword=this.newPassword;
   // alert(this.email);
    //alert(this.newPassword);
    alert(this.confirmPassword);
     // Check if newPassword and confirmPassword match
  if (this.newPassword !== this.confirmPassword) {
    // Display an error message or handle it as needed
    console.error('New password and confirm password do not match');
    //this.sweet.alertMessage('success','New password and confirm password do not match');
    return;
  }
    
    this.forgetService.reset(this.resetRequest).subscribe((data:any)=>{
       alert("sdfghjk")
      Toast.fire({
        icon: data,
        title: 'Password Change Succesfully',
    
      })
        this.router.navigate(['login']);
    
      },(error: any)=>{
       console.log(error);
      
      }
      
      );
     }
     

}

