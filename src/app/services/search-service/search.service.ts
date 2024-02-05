
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../user/helper';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http:HttpClient) { }

   searchitems(text:any){

      const params = new HttpParams().set('searchTerm', text);
      return this.http.get(`${baseUrl}/user/search`, { params });
    }

    serchDoctor(keyword:any){

      const params = new HttpParams().set('keyword',keyword);
      return this.http.get(`${baseUrl}/doctor/doctors/by-keyword`,{params});

    }
  }

