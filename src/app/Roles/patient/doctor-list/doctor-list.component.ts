import { Component } from '@angular/core';
import { Doctor } from 'src/app/entity/DoctorList';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent {
  doctors: Doctor[] = [
  {id: 1,
    name: "Dr. John Doe",
    image: "assets/img/doctors/doctor-thumb-02.jpg",
    speciality: "Cardiologist",
    departmentIcon: "path/to/icon.jpg",
    department: "Cardiology",
    rating: 4.5,
    feedbackCount: 20,
    location: "City Hospital",
    features: [{ imageUrl: "assets/img/features/feature-01.jpg" },{ imageUrl: "assets/img/features/feature-02.jpg" },{imageUrl: "assets/img/features/feature-03.jpg"}],
    services: ["EKG", "Stress Test", "Heart Monitoring"],
    thumbsUp: 15,
    costRange: "$$$",
    tooltip: "Experienced cardiologist with a focus on heart health."
 },
 {
 id: 1,
    name: "Dr. John Doe",
    image: "assets/img/doctors/doctor-thumb-01.jpg",
    speciality: "Cardiologist",
    departmentIcon: "path/to/icon.jpg",
    department: "Cardiology",
    rating: 4.5,
    feedbackCount: 20,
    location: "City Hospital",
    features: [{ imageUrl: "assets/img/features/feature-01.jpg" },{ imageUrl: "assets/img/features/feature-02.jpg" }],
    services: ["EKG", "Stress Test", "Heart Monitoring"],
    thumbsUp: 15,
    costRange: "$$$",
    tooltip: "Experienced cardiologist with a focus on heart health."
 },
 {
  id: 1,
    name: "Dr. John Doe",
    image: "assets/img/doctors/doctor-thumb-03.jpg",
    speciality: "Cardiologist",
    departmentIcon: "path/to/icon.jpg",
    department: "Cardiology",
    rating: 4.5,
    feedbackCount: 20,
    location: "City Hospital",
    features: [{ imageUrl: "assets/img/features/feature-01.jpg" }],
    services: ["EKG", "Stress Test", "Heart Monitoring"],
    thumbsUp: 15,
    costRange: "$$$",
    tooltip: "Experienced cardiologist with a focus on heart health."

 }
  ];

}
