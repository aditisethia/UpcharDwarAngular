import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Lab } from 'src/app/entity/Lab';
import { Location } from 'src/app/entity/Location';
import { GetLabRequest } from 'src/app/payload/Request/GetLabRequest';
import { SearchLabRequest } from 'src/app/payload/SearchLabRequest';

import { LabServiceService } from 'src/app/services/Lab-service/lab-service.service';
import { PatientserviceService } from 'src/app/services/patient-service/patientservice.service';
import { LoginService } from 'src/app/services/user/login.service';

@Component({
  selector: 'app-patient-labs-list',
  templateUrl: './patient-labs-list.component.html',
  styleUrls: ['./patient-labs-list.component.css']
})
export class PatientLabsListComponent {

  starsArray: number[] = Array(5).fill(0).map((_, index) => index + 1);

  pemail:any;

  pid:any;
  responseMessage: any;
  
  favoriteLabIds: Set<number> = new Set<number>();
  constructor(private labService: LabServiceService , private loginservice:LoginService , private patientservice:PatientserviceService,private router:Router) { }

  ngOnInit(): void {
    this.filter();

    this.loginservice.getCurrentUser().subscribe((currentuser: any) => {
      // this.AppointMentRequest.patient = currentuser.id;
      this.pemail = currentuser.email;
      if (this.pemail !== null) {
        this.getpatientbyemail();
      }

    });
  



    this.getAllLab();
  }
  labs: GetLabRequest[] = [];

  IMG_URLs = this.labService.IMAGE_URL;

  getpatientbyemail() {

    //console.log(this.pemail);
    this.patientservice.getpatientbyemail(this.pemail).subscribe((data: any) => {
      
      this.pid=data.id;
      console.log(this.pid);
      


    })

  }

  getAllLab() {
    console.log('ts');

    this.labService.getAllLab(this.pageNo, this.pageSize, this.sortBy).subscribe(
      (data: any) => {
        this.labs = data.contents;
        console.log(data);
        console.log(this.labs);
      },
      (error) => {
        console.error(error);
      }
    )
  }


  // In your component class


  // makeLabFavorite(labId: number): void {
  //   this.labService.makeLabFavorite(labId, this.pid).subscribe(
  //     (response: any) => {
  //       if (response.message === "Lab is already added as a favorite for this patient") {
  //         this.responseMessage = 'Lab is already added as a favorite for this patient';
  //       } else if (response.message === 'success') {
  //         this.responseMessage = 'Lab added as a favorite!';
  //       } else {
  //         // Handle the case when the status is neither 'already-favorite' nor 'success'
  //         this.responseMessage = 'An unexpected error occurred.';
  //       }
  //     },
  //     (error) => {
  //       this.responseMessage = error.error.message || 'An error occurred while processing your request.';
  //     }
  //   );
  // }
  
 

  // Assuming this is part of your component class
labButtonClicked: { [key: number]: boolean } = {};
responseMessages: { [key: number]: string } = {};

makeLabFavorite(labId: number): void {
  // Set the flag to true when the button is clicked
  this.labButtonClicked[labId] = true;

  this.labService.makeLabFavorite(labId, this.pid).subscribe(
    (response: any) => {
      if (response.message === 'Lab is already added as a favorite for this patient') {
        this.responseMessages[labId] = `Lab  is already added as a favorite for this patient`;
      } else if (response.message === 'success') {
        this.responseMessages[labId] = `Lab  added as a favorite!`;
      } else {
        this.responseMessages[labId] = `An unexpected error occurred for Lab .`;
      }
    },
    (error) => {
      this.responseMessages[labId] = error.error.message || 'An error occurred while processing your request.';
    }
  );
}

getStarIcons(rating: number): string[] {
   

  let starsArray: string[] = [];
  let i = 0
  for (i = 0; i < rating; i++) {
    starsArray.push('fas fa-star filled');

  }
  for (let j = i; j < 5; j++) {
    starsArray.push('fas fa-star');


  }


  return starsArray;
}


  // searching the students
  filter() {

    if (this.searching.labName === "" && this.searching.location.area == "") {
      this.getAllLab()
    }
    else {

      this.labService.searchLab(this.pageIndex, this.pageSize, this.searching, this.sortBy).subscribe(
        (data: any) => {
          this.labs = data.content;
          console.log(data.content);
          this.length = data.totalElements;
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }

  navigateToprofileWithId(id: number) {
    this.router.navigate(['/patientmaindashboard/labprofile', id]);
  }




  pageNo = 0; // Replace with your actual page number
  pageSize = 30; // Replace with your actual page size
  sortBy = 'labName'; // Replace with your actual sort field



  searching: Lab = new Lab();



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

    this.filter()
  }


}
