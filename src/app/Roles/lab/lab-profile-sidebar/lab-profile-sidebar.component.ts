import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LabRegistrationResponse } from 'src/app/payload/response/Response/LabRegistrationResponse';
import { LabServiceService } from 'src/app/services/Lab-service/lab-service.service';
import { LoginService } from 'src/app/services/user/login.service';

@Component({
  selector: 'app-lab-profile-sidebar',
  templateUrl: './lab-profile-sidebar.component.html',
  styleUrls: ['./lab-profile-sidebar.component.css']
})
export class LabProfileSidebarComponent {

  lab!:LabRegistrationResponse;
  userId:any;
  IMG_URLs = this.ltService.IMAGE_URL;
  constructor(private loginService: LoginService , private ltService:LabServiceService , private _route:Router){}

   labId:any

  ngOnInit(): void {
    this.ltService.lab.subscribe((data: any) => {
      this.lab = data.Lab;
      this.labId=this.lab.id;
      console.log(data.Lab);




  });

}

logout(){
  this.loginService.logout();
}


}
