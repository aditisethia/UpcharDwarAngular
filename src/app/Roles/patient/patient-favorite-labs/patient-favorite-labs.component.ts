import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { data, error } from 'jquery';
import { GetLabRequest } from 'src/app/payload/Request/GetLabRequest';
import { LabServiceService } from 'src/app/services/Lab-service/lab-service.service';
import { PatientserviceService } from 'src/app/services/patient-service/patientservice.service';
import { LoginService } from 'src/app/services/user/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-patient-favorite-labs',
  templateUrl: './patient-favorite-labs.component.html',
  styleUrls: ['./patient-favorite-labs.component.css']
})
export class PatientFavoriteLabsComponent {
  pemail:any;
  pid:any;
  starsArray: number[] = Array(5).fill(0).map((_, index) => index + 1);
  
  constructor(private labService: LabServiceService , private loginservice:LoginService , private patientservice:PatientserviceService, private router:Router) { }
  ngOnInit(): void {
  

    this.loginservice.getCurrentUser().subscribe((currentuser: any) => {
      // this.AppointMentRequest.patient = currentuser.id;
      this.pemail = currentuser.email;
      if (this.pemail !== null) {
        this.getpatientbyemail();
      }

    });
  



  }
  labs: GetLabRequest[] = [];

  IMG_URLs = this.labService.IMAGE_URL;

  getpatientbyemail() {

    //console.log(this.pemail);
    this.patientservice.getpatientbyemail(this.pemail).subscribe((data: any) => {
      
      this.pid=data.id;
      console.log(this.pid);
     this. getAllLab(this.pid);


    })

  }

  getAllLab(pid:any) {
    console.log(this.pid+"=======");

    this.labService.allFavoriteLab(this.pid, this.pageNo, this.pageSize, this.sortBy).subscribe(
      (data: any) => {
        this.labs = data.contents;
        console.log(data);

        console.log(this.labs);
        //this.students=data;
        //this.length=data.totalElements;
      },
      (error) => {
        console.error(error);
      }
    )
  }


  removeFromFab(labId:any){
    this.labService.removeFavLab(this.pid,labId).subscribe(
      (data:any) =>{
        Swal.fire(data.message)
         this.getAllLab(this.pid);
      },
      (error) =>{
        Swal.fire(error);
      }
    )
  }


    pageNo = 0; // Replace with your actual page number
    pageSize = 30; // Replace with your actual page size
    sortBy = 'id'; // Replace with your actual sort field
  
  
  
    
  
  
  
    length = 50;
    pageIndex = 0;
    pageSizeOptions = [1, 2, 5];
  
    hidePageSize = false;
    showPageSizeOptions = true;
    showFirstLastButtons = true;
    disabled = false;
    pageEvent!: PageEvent;
  
    handlePageEvent(e: PageEvent) {
      this.pageEvent = e;
      this.length = e.length;
      this.pageSize = e.pageSize;
      this.pageIndex = e.pageIndex;
  
        this.getAllLab(this.pid)
    }

}
