import { Component } from '@angular/core';

@Component({
  selector: 'app-pharmacy-admin-orders',
  templateUrl: './pharmacy-admin-orders.component.html',
  styleUrls: ['./pharmacy-admin-orders.component.css']
})
export class PharmacyAdminOrdersComponent {





  constructor() { }

  ngOnInit(): void {
    
  }

  transactions: Transaction[] = [
    { 
      invoiceNumber: 'INV001', 
      patientID: 101, 
      patientName: 'John Doe', 
      totalAmount: 150.00, 
      status: 'Paid', 
      invoiceLink: '/invoice-details/INV001', 
      profileLink: '/patient-profile/101', 
      patientImage: 'assets/img/patients/patient.jpg'
    },
    // Add more transactions as needed
  ];


  deleteTransaction(transaction: Transaction): void {
    // Implement the logic to delete the transaction
    // Show confirmation modal or perform the deletion directly
  }

  deleteTransactionConfirmed(): void {
    // Implement logic when the user confirms the deletion
    // Delete the transaction or perform any other necessary actions
  }
}



interface Transaction {
  invoiceNumber: string;
  patientID: number;
  patientName: string;
  totalAmount: number;
  status: string;
  invoiceLink: string;
  profileLink: string;
  patientImage: string;
}