import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-review',
  templateUrl: './admin-review.component.html',
  styleUrls: ['./admin-review.component.css']
})
export class AdminReviewComponent {

  reviews: Review[] = [
    { id: 1, patientName: 'Charlene Reed', doctorName: 'Dr. Ruby Perrin', ratings: 4, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', date: '3 Nov 2019 09:59 AM', patientImage: 'patient1.jpg', doctorImage: 'doctor-thumb-01.jpg' },
    // Add other review data here...
  ];
  generateArray(length: number): any[] {
    return new Array(length);
  }
}
interface Review {
  id: number;
  patientName: string;
  doctorName: string;
  ratings: number;
  description: string;
  date: string;
  patientImage: string; // Path to the patient image
  doctorImage: string;  // Path to the doctor image
}