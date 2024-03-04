import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ChangePasswordRequest } from 'src/app/payload/Request/ChangePasswordRequest';
import { UserServiceService } from 'src/app/services/user/user-service.service';
import Toast from 'src/app/utils/Sweet-alert-message';

@Component({
  selector: 'app-patient-change-password',
  templateUrl: './patient-change-password.component.html',
  styleUrls: ['./patient-change-password.component.css']
})
export class PatientChangePasswordComponent {
  email: any = "";
  oldPassword: string ="";
  newPassword: string = "";
  confirmPassword: string = "";
   changePasswordRequest:ChangePasswordRequest = new ChangePasswordRequest;
   user:any;
  constructor(private forgetService:UserServiceService,private router:Router,private snack:MatSnackBar){}
  ngOnInit(): void {
 let u=localStorage.getItem('user');
 if(u)
 this.user=JSON.parse(u)
 console.log(this.user);
 
  }


  formSubmit(){
   
 
    if(this.changePasswordRequest.email.trim()=='' || this.changePasswordRequest.email==null)
    {
      this.snack.open('email is required !!','',{
        duration:3000,
      });
      return;
    }
  }
  changePassword() {

    this.changePasswordRequest.email=this.user.email;
  
    //alert(this.newPassword);
   
     // Check if newPassword and confirmPassword match
     
  if (this.changePasswordRequest.newPassword !== this.confirmPassword) {
   
    Toast.fire({
      icon: 'success',
      title: 'New password and confirm password do not match',
    })
  
  
   
    return;
  }
    
    this.forgetService.changePassword(this.changePasswordRequest).subscribe((data:any)=>{
      console.log(data.message);
      
     if(data.message=="Password Change Successfully")
     {
      Toast.fire({
        icon: 'success',
        title: data.message,
      })
    
     }else{
      Toast.fire({
        icon: 'error',
        title: data.message,
      })
     }
      
     })
    }
   
}
