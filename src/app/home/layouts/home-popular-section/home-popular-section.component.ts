import { LabServiceService } from 'src/app/services/Lab-service/lab-service.service';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Lab } from 'src/app/entity/Lab';
import { Doctor_Request } from 'src/app/payload/Request/Doctor_Request';
import { DoctorserviceService } from 'src/app/services/doctor-service/doctorservice.service';
import baseUrl from 'src/app/services/user/helper';
import { LoginService } from 'src/app/services/user/login.service';
declare let Swiper:any;
@Component({
  selector: 'app-home-popular-section',
  templateUrl: './home-popular-section.component.html',
  styleUrls: ['./home-popular-section.component.css']
})
export class HomePopularSectionComponent implements AfterViewInit {

  user!: User;
  role:any;
  loginstatus: boolean = false;
  dr:any;
  doctors:Doctor_Request[] | undefined;
  Labs:Lab[]=[];
  IMG_URLs = this.doctorService.IMAGE_URL;



    constructor(private labService:LabServiceService, private loginservice:LoginService,private http:HttpClient,private doctorService:DoctorserviceService){}



    ngAfterViewInit(): void {
      this.getAllLab();
      this.loginservice.getCurrentUser().subscribe((Data:any)=>{
        this.user=Data;

        console.log(this.user);
        if(this.user){
          this.loginstatus=true;
        }
        const userRole: UserRole | undefined = this.user.userRole[0];
        const role: { roleId: number; roleName: string } | undefined = userRole?.role;
        // Storing 'role' in another variable
        const anotherVariable: { roleId: number; roleName: string } | undefined = role;
        console.log(this.role=anotherVariable.roleName);
        console.log(this.role);

      },
      (error:any)=>{
        //error
        console.log("________>>>>>>>>>>>>>>>"+error);
        })

      this.getAllDoctors(0,10).subscribe((data)=>{
        console.log(data);
        this.dr=data;
        this.doctors=this.dr.content;
        console.log("test---------------------");
        
        console.log(this.doctors);

      })
      var swiper = new Swiper(".slide-content", {
        slidesPerView: 3,
        spaceBetween: 25,
        loop: true,
        centerSlide: 'true',
        fade: 'true',
        grabCursor: 'true',
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

        breakpoints:{
            0: {
                slidesPerView: 1,
            },
            520: {
                slidesPerView: 2,
            },
            950: {
                slidesPerView: 3,
            },
        },
      });

    }


    getAllDoctors(pageNo: number, pageSize: number) {
      const url = `${baseUrl}/doctor/${pageNo}/${pageSize}`;
      return this.http.get(url);


  }

  getAllLab() {
    console.log('ts');

    this.labService.getAllLab(0, 10, "labName").subscribe(
      (data: any) => {
        this.Labs = data.contents;
        console.log(data);
        console.log(this.Labs);
      },
      (error) => {
        console.error(error);
      }
    )
  }
  // doctor: Doctor[] = [
  //   { name: 'Ruby Perrin', image: 'assets/img/doctors/doctor-01.jpg', specialization: 'MDS - Periodontology and Oral Implantology, BDS', rating: 5, location: 'Florida, USA', availability: 'Available on Fri, 22 Mar', feeRange: '$300 - $1000' },
  //   { name: 'Ruby Perrin', image: 'assets/img/doctors/doctor-02.jpg', specialization: 'MDS - Periodontology and Oral Implantology, BDS', rating: 5, location: 'Florida, USA', availability: 'Available on Fri, 22 Mar', feeRange: '$300 - $1000' },
  //   { name: 'Ruby Perrin', image: 'assets/img/doctors/doctor-03.jpg', specialization: 'MDS - Periodontology and Oral Implantology, BDS', rating: 5, location: 'Florida, USA', availability: 'Available on Fri, 22 Mar', feeRange: '$300 - $1000' },
  //   { name: 'Ruby Perrin', image: 'assets/img/doctors/doctor-04.jpg', specialization: 'MDS - Periodontology and Oral Implantology, BDS', rating: 5, location: 'Florida, USA', availability: 'Available on Fri, 22 Mar', feeRange: '$300 - $1000' },
  //   { name: 'Ruby Perrin', image: 'assets/img/doctors/doctor-05.jpg', specialization: 'MDS - Periodontology and Oral Implantology, BDS', rating: 5, location: 'Florida, USA', availability: 'Available on Fri, 22 Mar', feeRange: '$300 - $1000' },

  //   // Add more doctors as needed
  // ];












}

// doctor.model.ts
export interface Doctor {
  id:number;
  name: string;
  imageName: string;
  specialization: string;
  rating: number;
  location: string;
  availability: string;
  feeRange: string;
}
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  status: string;
  role: any; // You can replace 'any' with the actual type of the 'role' property
  userRole: UserRole[];
}

// Define the interface for the 'UserRole' array
interface UserRole {
  role: {
    roleId: number;
    roleName: string;
  };
  userRoleId: number;
}
