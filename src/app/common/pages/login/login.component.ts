import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthRequest } from 'src/app/payload/Request/authRequest';
import { ForgetpasswordService } from 'src/app/services/user/forgetpassword.service';
import { LoginService } from 'src/app/services/user/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 

  status:any;
  constructor(private snack: MatSnackBar, private login: LoginService, private router: Router, private forgetpassword:ForgetpasswordService,private fb:FormBuilder) { }

  loginform!:FormGroup;
  loginData:AuthRequest=new AuthRequest;



  ngOnInit(): void {
   this. checkLoginFormValidation();
  }

  checkLoginFormValidation()
  {
    this.loginform=this.fb.group({
      email:['',[Validators.required]],
      password:['',[Validators.required]]
    })
  }


  async formSubmit() {
    
    console.log("login button submitted");
    localStorage.clear()
    this.loginform.markAllAsTouched();
  if(!this.loginform.valid)
  {
    return;
  }
    //request to server to genrate token
    this.login.generateToken(this.loginData).subscribe(
      (data: any) => {
        console.log("success");
        console.log(data);
        //loginn....
        this.login.setLoginUser(data.token);
        this.getCurrentUser();
      },
      (error) => {
        console.log('Error !');
        console.log(error);
        this.snack.open("invalid details ,try again", '', {
          duration: 3000,
        });

      }
    )
    return;


  }



  getCurrentUser() {


    this.login.getCurrentUser().subscribe(
      (user: any) => {
        this.login.setUser(user);
       // set into observable
        this.login.getCurrentUser().subscribe((data)=>{
     
        
          console.log(data);
         })
        this.status=user.status;
        console.log(user);
        // redirect if admin :adminDashboard

        //redirect if user : userDashBoard
        if (this.login.getUserRole().includes("ADMIN")) {
          //admin dashboard
          // window.location.href='/admin'
          this.router.navigate(['/admindashboard'])
          this.login.loginStatusSubject.next(true);
        }
        else if (this.login.getUserRole().includes("DOCTOR") &&this.status==="verified") {
          //user dashboard
          this.router.navigate(['/doctordashboard'])
          this.login.loginStatusSubject.next(true);
        }
        else if (this.login.getUserRole().includes("DOCTOR") &&this.status==="not varified") {
          //user dashboard
          this.router.navigate(['/doctorregistration'])
          this.login.loginStatusSubject.next(true);
        }
        else if (this.login.getUserRole().includes("LAB") && this.status==="not varified") {
          //user dashboard
          this.router.navigate(['/labregister'])
          this.login.loginStatusSubject.next(true);
        }

        else if (this.login.getUserRole().includes("LAB") && this.status==="verified") {
          //user dashboard
          this.router.navigate(['/labdashboard/labdatadashboard'])
          this.login.loginStatusSubject.next(true);
        }
        else if (this.login.getUserRole().includes("PATIENT")&&this.status==="verified") {
          //user dashboard
          this.router.navigate(["/patientmaindashboard/patientdashboard"])
          this.login.loginStatusSubject.next(true);
        }
        else if (this.login.getUserRole().includes("PATIENT")&&this.status==="not varified") {
          //user dashboard
          this.router.navigate(["/patientregister"])
          this.login.loginStatusSubject.next(true);
        }
        else {
          this.login.logout();
        }

      }
    );
  }
}
