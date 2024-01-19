import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Doctor_Request } from 'src/app/payload/Request/Doctor_Request';
import { DoctorserviceService } from 'src/app/services/doctor-service/doctorservice.service';
import baseUrl from 'src/app/services/user/helper';
import { LoginService } from 'src/app/services/user/login.service';

@Component({
  selector: 'app-home-popular-section',
  templateUrl: './home-popular-section.component.html',
  styleUrls: ['./home-popular-section.component.css']
})
export class HomePopularSectionComponent implements OnInit {

  user!: User;
  role:any;
  loginstatus: boolean = false;
  dr:any;
  doctors:Doctor_Request[] | undefined;
  IMG_URLs = this.doctorService.IMAGE_URL;



    constructor(private loginservice:LoginService,private http:HttpClient,private doctorService:DoctorserviceService){}



    ngOnInit(): void {

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
        console.log(this.doctors);

      })
    }


    getAllDoctors(pageNo: number, pageSize: number) {
      const url = `${baseUrl}/doctor/${pageNo}/${pageSize}`;
      return this.http.get(url);


  }
  doctor: Doctor[] = [
    { name: 'Ruby Perrin', image: 'assets/img/doctors/doctor-01.jpg', specialization: 'MDS - Periodontology and Oral Implantology, BDS', rating: 5, location: 'Florida, USA', availability: 'Available on Fri, 22 Mar', feeRange: '$300 - $1000' },
    { name: 'Ruby Perrin', image: 'assets/img/doctors/doctor-02.jpg', specialization: 'MDS - Periodontology and Oral Implantology, BDS', rating: 5, location: 'Florida, USA', availability: 'Available on Fri, 22 Mar', feeRange: '$300 - $1000' },
    { name: 'Ruby Perrin', image: 'assets/img/doctors/doctor-03.jpg', specialization: 'MDS - Periodontology and Oral Implantology, BDS', rating: 5, location: 'Florida, USA', availability: 'Available on Fri, 22 Mar', feeRange: '$300 - $1000' },
    { name: 'Ruby Perrin', image: 'assets/img/doctors/doctor-04.jpg', specialization: 'MDS - Periodontology and Oral Implantology, BDS', rating: 5, location: 'Florida, USA', availability: 'Available on Fri, 22 Mar', feeRange: '$300 - $1000' },
    { name: 'Ruby Perrin', image: 'assets/img/doctors/doctor-05.jpg', specialization: 'MDS - Periodontology and Oral Implantology, BDS', rating: 5, location: 'Florida, USA', availability: 'Available on Fri, 22 Mar', feeRange: '$300 - $1000' },

    // Add more doctors as needed
  ];












}

// doctor.model.ts
export interface Doctor {
  name: string;
  image: string;
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
