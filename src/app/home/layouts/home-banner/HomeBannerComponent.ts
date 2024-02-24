import { DoctorScheduleService } from 'src/app/services/doctor-schedule.service';
import { LabServiceService } from 'src/app/services/Lab-service/lab-service.service';
import { LoginService } from 'src/app/services/user/login.service';
import { SearchService } from './../../../services/search-service/search.service';
import { Component, OnInit } from '@angular/core';
import { Data } from './home-banner.component';


@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.css']
})
export class HomeBannerComponent implements OnInit {

  searchTerm: string = '';
  searchResult: any;
  data: Data = {
    doctor: [], // initialize with your data
    lab: [],
    pharmacy: [],
  };
  show: boolean = false;

  constructor(private searchservice: SearchService, private scheduleservice: DoctorScheduleService, private labService: LabServiceService, private loginService: LoginService) { }
  IMG_URLs = this.labService.IMAGE_URL;

  ngOnInit(): void {
  }

  @HostListener('click', ['$event.target'])
  onClick(btn) {
    console.log('button', btn, 'number of clicks:', this.numberOfClicks++);
  }

  searching() {

    if (this.searchTerm.trim() == '') {
      this.data = {
        doctor: [], // initialize with your data
        lab: [],
        pharmacy: [],
      };
    }

    if (this.searchTerm !== '')
      this.searchservice.searchitems(this.searchTerm).subscribe((data: any) => {
        console.log(data);
        this.data = data;
        if (this.data)
          this.show = true;
      });


  }

  openProfile(type: string, index: number) {
    console.log(type);
    console.log(index);
  }



}
