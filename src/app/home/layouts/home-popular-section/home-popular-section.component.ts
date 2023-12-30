import { Component } from '@angular/core';

@Component({
  selector: 'app-home-popular-section',
  templateUrl: './home-popular-section.component.html',
  styleUrls: ['./home-popular-section.component.css']
})
export class HomePopularSectionComponent {


  doctors: Doctor[
    
  ] = [
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
