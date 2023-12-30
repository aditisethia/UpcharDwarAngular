import { Component } from '@angular/core';

@Component({
  selector: 'app-pharmacy-admin-managemedicines',
  templateUrl: './pharmacy-admin-managemedicines.component.html',
  styleUrls: ['./pharmacy-admin-managemedicines.component.css']
})
export class PharmacyAdminManagemedicinesComponent {

  medicines: Medicine[] = [];

  constructor() { }

  ngOnInit(): void {
    // Sample Medicines (Replace with actual data or fetch from a service)
    this.medicines = [
      { 
        medicineId: 1,
        medicineName: 'Paracetamol',
        price: 5.99,
        stock: 100,
        medicineImage: '../../../../assets/img/specialities/specialities-01.png'
      },
      { 
        medicineId: 2,
        medicineName: 'Aspirin',
        price: 7.49,
        stock: 50,
        medicineImage: '../../../../assets/img/specialities/specialities-02.png'
      },
      { 
        medicineId: 3,
        medicineName: 'Cough Syrup',
        price: 12.99,
        stock: 30,
        medicineImage: '../../../../assets/img/specialities/specialities-03.png'
      }
      // Add more medicines as needed
    ];
  }

  viewMedicineDetails(medicine: any): void {
    // Implement logic to view details of a medicine
  }

  addMedicineToCart(medicine:any ): void {
    // Implement logic to add the medicine to the shopping cart
  }

  removeMedicineFromInventory(medicine:any ): void {
    // Implement logic to remove the medicine from the inventory
  }
}


export interface Medicine {
  medicineId: number;
  medicineName: string;
  price: number;
  stock: number;
  medicineImage: string;
}