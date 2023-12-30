import { Component } from '@angular/core';

@Component({
  selector: 'app-pharmacy-orders',
  templateUrl: './pharmacy-orders.component.html',
  styleUrls: ['./pharmacy-orders.component.css']
})
export class PharmacyOrdersComponent {

  arrivingOrders: any[];  // Replace 'any' with the actual type of your arriving orders
  orderHistory: any[];    // Replace 'any' with the actual type of your order history

  // Example data (replace with actual data retrieval logic)
  constructor() {
    this.arrivingOrders = [
      { medicineName: 'Medicine A', quantity: 10, deliveryDate: '2023-12-05', status: 'Pending' },
      { medicineName: 'Medicine B', quantity: 5, deliveryDate: '2023-12-06', status: 'Processing' },
      { medicineName: 'Medicine A', quantity: 10, deliveryDate: '2023-12-05', status: 'Pending' },
      { medicineName: 'Medicine B', quantity: 5, deliveryDate: '2023-12-06', status: 'Processing' },
      { medicineName: 'Medicine A', quantity: 10, deliveryDate: '2023-12-05', status: 'Pending' },
      { medicineName: 'Medicine B', quantity: 5, deliveryDate: '2023-12-06', status: 'Processing' },
      { medicineName: 'Medicine A', quantity: 10, deliveryDate: '2023-12-05', status: 'Pending' },
      { medicineName: 'Medicine B', quantity: 5, deliveryDate: '2023-12-06', status: 'Processing' },
      // Add more arriving orders as needed
    ];

    this.orderHistory = [
      { medicineName: 'Medicine C', quantity: 8, deliveryDate: '2023-11-28', status: 'Delivered' },
      { medicineName: 'Medicine D', quantity: 15, deliveryDate: '2023-11-30', status: 'Completed' },
      { medicineName: 'Medicine C', quantity: 8, deliveryDate: '2023-11-28', status: 'Delivered' },
      { medicineName: 'Medicine D', quantity: 15, deliveryDate: '2023-11-30', status: 'Completed' },
      { medicineName: 'Medicine C', quantity: 8, deliveryDate: '2023-11-28', status: 'Delivered' },
      { medicineName: 'Medicine D', quantity: 15, deliveryDate: '2023-11-30', status: 'Completed' },
      { medicineName: 'Medicine C', quantity: 8, deliveryDate: '2023-11-28', status: 'Delivered' },
      { medicineName: 'Medicine D', quantity: 15, deliveryDate: '2023-11-30', status: 'Completed' },
      { medicineName: 'Medicine C', quantity: 8, deliveryDate: '2023-11-28', status: 'Delivered' },
      { medicineName: 'Medicine D', quantity: 15, deliveryDate: '2023-11-30', status: 'Completed' },
      // Add more order history entries as needed
    ];
  }
}
