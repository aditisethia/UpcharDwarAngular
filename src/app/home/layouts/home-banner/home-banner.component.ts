import { Router } from '@angular/router';
import { DoctorScheduleService } from 'src/app/services/doctor-schedule.service';
import { LabServiceService } from 'src/app/services/Lab-service/lab-service.service';
import { LoginService } from 'src/app/services/user/login.service';
import { SearchService } from './../../../services/search-service/search.service';
import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { Lab } from 'src/app/entity/Lab';
import { Doctor } from 'src/app/entity/Doctor';

@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.css']
})
export class HomeBannerComponent  implements OnInit{

  searchTerm: string = '';
  searchResult: any;
  data: Data = {
    doctor: [], // initialize with your data
    lab: [],
    pharmacy: [],
  };
  show: boolean = false;

  constructor(private route :Router, private el: ElementRef,private searchservice:SearchService,private scheduleservice: DoctorScheduleService,private labService:LabServiceService,private loginService:LoginService) { }
  IMG_URLs = this.labService.IMAGE_URL;

  ngOnInit(): void {

  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    if ((event.target as HTMLElement).id !== 'search-reset') {
      this.data =  {
        doctor : [], // initialize with your data
        lab: [],
        pharmacy: [],
      };
    }
  }

  navigateToProfiled(id:any){
 this.route.navigate(['/patientmaindashboard/doctorprofile/',id]);

  }

  searching(){

    if(this.searchTerm.trim() == ''){
      this.data =  {
        doctor : [], // initialize with your data
        lab: [],
        pharmacy: [],
      };
    }

    if(this.searchTerm!=='')
    this.searchservice.searchitems(this.searchTerm).subscribe((data:any)=>{
      console.log(data);
      this.data=data;
      if(this.data)
      this.show=true;
    })


  }

  openProfile(type: string, index: number) {
    console.log(type);
    console.log(index);
  }



}
interface Data {
  doctor: Doctor[];
  lab: Lab[];
  pharmacy: Pharmacy[];
}


interface Pharmacy {
  id:number;
  pharmaName: string;
  // other properties
}
