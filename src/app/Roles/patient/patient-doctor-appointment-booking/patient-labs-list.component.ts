import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Lab } from 'src/app/entity/Lab';
import { Location } from 'src/app/entity/Location';
import { GetLabRequest } from 'src/app/payload/Request/GetLabRequest';
import { SearchLabRequest } from 'src/app/payload/SearchLabRequest';

import { LabServiceService } from 'src/app/services/Lab-service/lab-service.service';

@Component({
  selector: 'app-patient-labs-list',
  templateUrl: './patient-labs-list.component.html',
  styleUrls: ['./patient-labs-list.component.css']
})
export class PatientLabsListComponent {

  starsArray: number[] = Array(5).fill(0).map((_, index) => index + 1);

  ngOnInit(): void {
    this.filter();

    this.getAllLab();
  }
  labs: GetLabRequest[] = [];

  IMG_URLs = this.labService.IMAGE_URL;

  constructor(private labService: LabServiceService) { }
  getAllLab() {
    console.log('ts');

    this.labService.getAllLab(this.pageNo, this.pageSize, this.sortBy).subscribe(
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



  // searching the students
  filter() {

    if(this.searching.labName===""&&this.searching.location.area==""){
      this.getAllLab()
    }
    else{

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
