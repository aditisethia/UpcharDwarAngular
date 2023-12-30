import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pharmacy-details',
  templateUrl: './pharmacy-details.component.html',
  styleUrls: ['./pharmacy-details.component.css']
})
export class PharmacyDetailsComponent {


  constructor(private route: ActivatedRoute) { }


  pharmacyShop = {
    image: '../../../assets/pharmacy-01.jpg',
    name: 'Pharmacy Name',
    type: 'Pharmacy Type',
    departmentImage: '../../../assets/pharmacy-01.jpg',
    department: 'Pharmacy',
    location: 'City, Country',
    gallery: [
      '../../../assets/pharmacy-01.jpg',
      '../../../assets/pharmacy-01.jpg',
      '../../../assets/pharmacy-01.jpg',
    ],
    services: ['Service 1', 'Service 2'],
    thumbsUpPercentage: 98,
    commentsCount: 45,
    hourlyRate: 80,
    bookingLink: '/book-appointment', // Replace with your actual booking link
  };


  availableMedicines = [
    { name: 'Medicine A', type: 'Tablet', price: 10.99, stock: 50 },
    { name: 'Medicine B', type: 'Capsule', price: 15.49, stock: 30 },
    { name: 'Medicine C', type: 'Syrup', price: 8.99, stock: 20 },
    { name: 'Medicine A', type: 'Tablet', price: 10.99, stock: 50 },
    { name: 'Medicine B', type: 'Capsule', price: 15.49, stock: 30 },
    { name: 'Medicine C', type: 'Syrup', price: 8.99, stock: 20 }, { name: 'Medicine A', type: 'Tablet', price: 10.99, stock: 50 },
    { name: 'Medicine B', type: 'Capsule', price: 15.49, stock: 30 },
    { name: 'Medicine C', type: 'Syrup', price: 8.99, stock: 20 }, { name: 'Medicine A', type: 'Tablet', price: 10.99, stock: 50 },
    { name: 'Medicine B', type: 'Capsule', price: 15.49, stock: 30 },
    { name: 'Medicine C', type: 'Syrup', price: 8.99, stock: 20 },
    // Add more medicines as needed
  ];


}