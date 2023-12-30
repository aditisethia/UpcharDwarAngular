import { Component } from '@angular/core';

@Component({
  selector: 'app-lab-allpatient',
  templateUrl: './lab-allpatient.component.html',
  styleUrls: ['./lab-allpatient.component.css']
})
export class LabAllpatientComponent {
  patients: any[] = []; // Add your patient data here

  constructor() { }

  ngOnInit(): void {
    // Fetch or initialize your patient data
    this.patients = [
      {
        name: 'Richard Wilson',
        patientId: 'P0016',
        location: 'Alabama, USA',
        phone: '+1 952 001 8563',
        age: '38 Years, Male',
        bloodGroup: 'AB+',
        image: 'assets/img/patients/patient.jpg'
      },
      {
        name: 'Richard Wilson',
        patientId: 'P0016',
        location: 'Alabama, USA',
        phone: '+1 952 001 8563',
        age: '38 Years, Male',
        bloodGroup: 'AB+',
        image: 'assets/img/patients/patient.jpg'
      },
      {
        name: 'Charlene Reed',
        patientId: 'P0001',
        location: 'North Carolina, USA',
        phone: '+1 828 632 9170',
        age: '29 Years, Female',
        bloodGroup: 'O+',
        image: 'assets/img/patients/patient1.jpg'
      },
      {
        name: 'Travis Trimble',
        patientId: 'PT0002',
        location: 'Maine, USA',
        phone: '+1 207 729 9974',
        age: '23 Years, Male',
        bloodGroup: 'B+',
        image: 'assets/img/patients/patient2.jpg'
      },
      // Add more patients here
      // ...
      {
        name: 'Harry Williams',
        patientId: 'PT0011',
        location: 'Colorado, USA',
        phone: '+1 303 607 7075',
        age: '9 Years, Male',
        bloodGroup: 'A-',
        image: 'assets/img/patients/patient11.jpg'
      },
      {
        name: 'Robert Rhodes',
        patientId: 'PT0010',
        location: 'California, USA',
        phone: '+1 858 259 5285',
        age: '19 Years, Male',
        bloodGroup: 'B+',
        image: 'assets/img/patients/patient10.jpg'
      },
      // Add other patients here
    ];
  }
}

