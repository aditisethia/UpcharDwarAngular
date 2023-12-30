import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { UserServiceService } from 'src/app/services/user/user-service.service';


import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  user={
  name:'',
  password : '',
  phone:'',
  email:  '',
  roleId:0,
  };
  constructor(  private userService:UserServiceService, private snack:MatSnackBar,private router: Router){

  }
  ngOnInit(): void {

  }




  onSubmit() {
    console.log(this.user);

    localStorage.setItem('fakeuser', JSON.stringify(this.user));
    localStorage.setItem('userEmail', this.user.email);
    if(this.user.name==''|| this.user.name==null){
      this.snack.open("name is required",'',{duration:3000 });
      return

      }
 //addUser:UserService
this.userService.addUser(this.user).subscribe(
  (data:any)=>{ //success


    console.log(data);
   // alert('success');
   Swal.fire('successfully done !!','user id is ' +data.id,'success')
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
