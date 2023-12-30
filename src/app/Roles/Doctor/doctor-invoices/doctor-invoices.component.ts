import { Component } from '@angular/core';

@Component({
  selector: 'app-doctor-invoices',
  templateUrl: './doctor-invoices.component.html',
  styleUrls: ['./doctor-invoices.component.css']
})
export class DoctorInvoicesComponent {

  invoices = [
    { invoiceNo: '#INV-0010', patient: 'Richard Wilson', patientId: '#PT0016', amount: '$450', paidOn: '14 Nov 2019' },
    { invoiceNo: '#INV-0009', patient: 'Charlene Reed', patientId: '#PT0001', amount: '$200', paidOn: '13 Nov 2019' },
    { invoiceNo: '#INV-0008', patient: 'Travis Trimble', patientId: '#PT0002', amount: '$100', paidOn: '12 Nov 2019' },
    { invoiceNo: '#INV-0007', patient: 'Carl Kelly', patientId: '#PT0003', amount: '$350', paidOn: '11 Nov 2019' },
    { invoiceNo: '#INV-0006', patient: 'Michelle Fairfax', patientId: '#PT0004', amount: '$275', paidOn: '10 Nov 2019' },
    { invoiceNo: '#INV-0005', patient: 'Gina Moore', patientId: '#PT0005', amount: '$600', paidOn: '9 Nov 2019' },
    { invoiceNo: '#INV-0004', patient: 'Elsie Gilley', patientId: '#PT0006', amount: '$50', paidOn: '8 Nov 2019' },
    { invoiceNo: '#INV-0003', patient: 'Joan Gardner', patientId: '#PT0007', amount: '$400', paidOn: '7 Nov 2019' },
    { invoiceNo: '#INV-0002', patient: 'Daniel Griffing', patientId: '#PT0008', amount: '$550', paidOn: '6 Nov 2019' },
    { invoiceNo: '#INV-0001', patient: 'Walter Roberson', patientId: '#PT0009', amount: '$100', paidOn: '5 Nov 2019' },
  ];
  
}
