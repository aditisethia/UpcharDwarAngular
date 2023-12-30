import { Component } from '@angular/core';

@Component({
  selector: 'app-pharmacy-dashboard',
  templateUrl: './pharmacy-dashboard.component.html',
  styleUrls: ['./pharmacy-dashboard.component.css']
})
export class PharmacyDashboardComponent {



  pharmacyShops = [
    {
      name: 'Pharmacy Shop 1',
      description: 'Description of Pharmacy Shop 1',
      image: '../../../assets/pharmacy-01.jpg',
      location: 'City, Country'
    },
    {
      name: 'Pharmacy Shop 1',
      description: 'Description of Pharmacy Shop 1',
      image: '../../../assets/pharmacy-01.jpg',
      location: 'City, Country'
    },
    {
      name: 'Pharmacy Shop 1',
      description: 'Description of Pharmacy Shop 1',
      image: '../../../assets/pharmacy-01.jpg',
      location: 'City, Country'
    },
    {
      name: 'Pharmacy Shop 1',
      description: 'Description of Pharmacy Shop 1',
      image: '../../../assets/pharmacy-01.jpg',
      location: 'City, Country'
    },
    {
      name: 'Pharmacy Shop 1',
      description: 'Description of Pharmacy Shop 1',
      image: '../../../assets/pharmacy-01.jpg',
      location: 'City, Country'
    },
    // Add more shop data as needed
  ];




  pharmacyProducts: any[] = []; // Replace 'any[]' with the actual type of your pharmacy product data

  ngOnInit() {
    // Fetch pharmacy product data from your backend or static source
    // For demonstration purposes, you can initialize it with static data
    this.pharmacyProducts = [
      { name: 'Product 1', image: '../../../assets/pharmacy-01.jpg', price: 20.99, description: 'Description for Product 1' },
      { name: 'Product 2', image: '../../../assets/pharmacy-01.jpg', price: 30.49, description: 'Description for Product 2' },
      { name: 'Product 1', image: '../../../assets/pharmacy-01.jpg', price: 20.99, description: 'Description for Product 1' },
      { name: 'Product 2', image: '../../../assets/pharmacy-01.jpg', price: 30.49, description: 'Description for Product 2' },
      { name: 'Product 1', image: '../../../assets/pharmacy-01.jpg', price: 20.99, description: 'Description for Product 1' },
      { name: 'Product 2', image: '../../../assets/pharmacy-01.jpg', price: 30.49, description: 'Description for Product 2' },
      { name: 'Product 1', image: '../../../assets/pharmacy-01.jpg', price: 20.99, description: 'Description for Product 1' },
      { name: 'Product 2', image: '../../../assets/pharmacy-01.jpg', price: 30.49, description: 'Description for Product 2' },
      { name: 'Product 1', image: '../../../assets/pharmacy-01.jpg', price: 20.99, description: 'Description for Product 1' },
      { name: 'Product 2', image: '../../../assets/pharmacy-01.jpg', price: 30.49, description: 'Description for Product 2' },
      { name: 'Product 1', image: '../../../assets/pharmacy-01.jpg', price: 20.99, description: 'Description for Product 1' },
      { name: 'Product 2', image: '../../../assets/pharmacy-01.jpg', price: 30.49, description: 'Description for Product 2' },
      // Add more products as needed
    ];


  }
}
