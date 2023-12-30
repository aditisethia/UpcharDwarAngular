import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-patientlist',
  templateUrl: './admin-patientlist.component.html',
  styleUrls: ['./admin-patientlist.component.css']
})
export class AdminPatientlistComponent {

  patients = [
    { id: '#PT001', name: 'Charlene Reed', age: 29, address: '4417 Goosetown Drive, Taylorsville, North Carolina, 28681', phone: '8286329170', lastVisit: '20 Oct 2019', paid: 100.00, imagePath: 'assets/img/patients/patient1.jpg' },
    { id: '#PT001', name: 'Charlene Reed', age: 29, address: '4417 Goosetown Drive, Taylorsville, North Carolina, 28681', phone: '8286329170', lastVisit: '20 Oct 2019', paid: 100.00, imagePath: 'assets/img/patients/patient1.jpg' },
    { id: '#PT001', name: 'Charlene Reed', age: 29, address: '4417 Goosetown Drive, Taylorsville, North Carolina, 28681', phone: '8286329170', lastVisit: '20 Oct 2019', paid: 100.00, imagePath: 'assets/img/patients/patient1.jpg' },
    { id: '#PT001', name: 'Charlene Reed', age: 29, address: '4417 Goosetown Drive, Taylorsville, North Carolina, 28681', phone: '8286329170', lastVisit: '20 Oct 2019', paid: 100.00, imagePath: 'assets/img/patients/patient1.jpg' },
    
    // Add other patient data here...
  ];
}
