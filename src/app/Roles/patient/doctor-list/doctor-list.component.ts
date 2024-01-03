import {  Doctor_Request } from './../../../payload/response/Request/Doctor_Request';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


import baseUrl from 'src/app/services/user/helper';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit{
// doctor: DoctorRequest[] | undefined;
dr:any;
doctor:Doctor_Request[] | undefined;



  constructor(private http:HttpClient){}


  ngOnInit(): void {
    this.getAllDoctors(0,10).subscribe((data)=>{
      console.log(data);
      this.dr=data;
      this.doctor=this.dr.content;
      console.log(this.doctor);

    })
  }


  getAllDoctors(pageNo: number, pageSize: number) {
    const url = `${baseUrl}/doctor/${pageNo}/${pageSize}`;
    return this.http.get(url);


}

}
