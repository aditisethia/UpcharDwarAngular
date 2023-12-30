import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-transactions',
  templateUrl: './admin-transactions.component.html',
  styleUrls: ['./admin-transactions.component.css']
})
export class AdminTransactionsComponent {

  transactions = [
    {
      invoiceNumber: '#IN0001',
      invoiceLink: 'invoice.html',
      patientID: '#PT001',
      patientName: 'Charlene Reed',
      patientImage: 'assets/img/patients/patient1.jpg',
      profileLink: 'profile.html',
      totalAmount: '$100.00',
      status: 'Paid'
    },
    {
      invoiceNumber: '#IN0002',
      invoiceLink: 'invoice.html',
      patientID: '#PT002',
      patientName: 'Travis Trimble',
      patientImage: 'assets/img/patients/patient2.jpg',
      profileLink: 'profile.html',
      totalAmount: '$200.00',
      status: 'Paid'
    },
    {
      invoiceNumber: '#IN0003',
      invoiceLink: 'invoice.html',
      patientID: '#PT003',
      patientName: 'Carl Kelly',
      patientImage: 'assets/img/patients/patient3.jpg',
      profileLink: 'profile.html',
      totalAmount: '$250.00',
      status: 'Paid'
    }
    // Add more transactions as needed
  ];
}
