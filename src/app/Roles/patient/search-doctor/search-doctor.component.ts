import { SearchService } from './../../../services/search-service/search.service';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Doctor_Request } from 'src/app/payload/Request/Doctor_Request';
import { DoctorserviceService } from 'src/app/services/doctor-service/doctorservice.service';
import baseUrl from 'src/app/services/user/helper';

@Component({
  selector: 'app-search-doctor',
  templateUrl: './search-doctor.component.html',
  styleUrls: ['./search-doctor.component.css']
})
export class SearchDoctorComponent {
  maleDoctorChecked: boolean = true;
  femaleDoctorChecked: boolean = false;
  dr: any;
  doctor: Doctor_Request[] | undefined;
  searchdoctor: Doctor_Request[] | undefined;
  IMG_URLs = this.doctorService.IMAGE_URL;
  searchKeyword: string = '';
  city: any;
  selectedCity: string='ALL';  // Set the default selected city


  constructor(private searchservice: SearchService, private http: HttpClient, private doctorService: DoctorserviceService) { }


  ngOnInit(): void {
    this.getAllDoctors(0, 10).subscribe((data) => {
      console.log(data);
      this.dr = data;
      this.doctor = this.dr.content;
      this.searchdoctor = this.doctor;
      console.log(this.doctor);

    })

    this.getallcity();
    this.search();
  }


  getallcity() {

    this.doctorService.getallcity().subscribe((city: any) => {

      this.city = city;
    })

  }

  getAllDoctors(pageNo: number, pageSize: number) {
    const url = `${baseUrl}/doctor/${pageNo}/${pageSize}`;
    return this.http.get(url);


  }

  search() {

    console.log("--------------");
    console.log(this.selectedCity);


    console.log(this.searchdoctor);

    this.searchservice.serchDoctor(this.searchKeyword).subscribe((data: any) => {
      this.searchdoctor = data; // Take only the first 4 items
      console.log(data);
      const Filterdoctor = [];

      for (const doctor of data) {
        if (doctor.city === this.selectedCity) {
          Filterdoctor.push(doctor);
        }

      }
      if (this.selectedCity !== null || this.selectedCity !== '') {
        // alert("!null")
        this.searchdoctor = [];
        this.searchdoctor = Filterdoctor;
      }

      if (this.selectedCity === "ALL") {
        //  alert("all")
        this.searchdoctor = [];
        this.searchdoctor = data;
      }
      if (this.selectedCity === "" || this.selectedCity === null) {
        // alert()
        this.searchdoctor = [];
        this.searchdoctor = this.doctor;
      }
      console.log(Filterdoctor);
    })
  }

}
