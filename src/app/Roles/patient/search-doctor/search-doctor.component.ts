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
  dr:any;
  doctor:Doctor_Request[] | undefined;
  searchdoctor:Doctor_Request[] | undefined;
  IMG_URLs = this.doctorService.IMAGE_URL;
  searchKeyword: string = '';


    constructor(private searchservice: SearchService, private http:HttpClient,private doctorService:DoctorserviceService){}


    ngOnInit(): void {
      this.getAllDoctors(0,10).subscribe((data)=>{
        console.log(data);
        this.dr=data;
        this.doctor=this.dr.content;
        console.log(this.doctor);

      })
      this.search();
    }


    getAllDoctors(pageNo: number, pageSize: number) {
      const url = `${baseUrl}/doctor/${pageNo}/${pageSize}`;
      return this.http.get(url);


  }

  search() {
    // Implement your search logic here
    console.log('Search button clicked!');
    console.log(this.searchKeyword);

  this.searchservice.serchDoctor(this.searchKeyword).subscribe((data: any) => {
    this.searchdoctor = data.slice(0, 4); // Take only the first 4 items
    console.log(data);

    })


  }
}
