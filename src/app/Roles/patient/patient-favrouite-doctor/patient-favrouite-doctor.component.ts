import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-favrouite-doctor',
  templateUrl: './patient-favrouite-doctor.component.html',
  styleUrls: ['./patient-favrouite-doctor.component.css']
})
export class PatientFavrouiteDoctorComponent {



  doctors: Doctor[] = [
    {
       name: 'Ruby Perrin',
       speciality: 'MDS - Periodontology and Oral Implantology, BDS',
       image: 'assets/img/doctors/doctor-01.jpg',
       rating: 5,
       location: 'Florida, USA',
       availability: 'Available on Fri, 22 Mar',
       feeRange: '$300 - $1000'
    },
    {
       name: 'Darren Elder',
       speciality: 'BDS, MDS - Oral & Maxillofacial Surgery',
       image: 'assets/img/doctors/doctor-02.jpg',
       rating: 4,
       location: 'Newyork, USA',
       availability: 'Available on Fri, 22 Mar',
       feeRange: '$50 - $300'
    },
    {
       name: 'Deborah Angel',
       speciality: 'MBBS, MD - General Medicine, DNB - Cardiology',
       image: 'assets/img/doctors/doctor-03.jpg',
       rating: 4,
       location: 'Georgia, USA',
       availability: 'Available on Fri, 22 Mar',
       feeRange: '$100 - $400'
    }
    // Add more doctors as needed
 ];
}
export interface Doctor {
  name: string;
  speciality: string;
  image: string;
  rating: number;
  location: string;
  availability: string;
  feeRange: string;
}