import { Component } from '@angular/core';

@Component({
  selector: 'app-lab-request-client',
  templateUrl: './lab-request-client.component.html',
  styleUrls: ['./lab-request-client.component.css']
})
export class LabRequestClientComponent {
  requests: any[] = []; // Replace 'any[]' with the actual type of your appointment data
  labTests: string[] = [
    'Blood Test',
    'Urine Test',
    'X-ray',
    // Add more lab tests as needed
  ];
  constructor() { }

  ngOnInit(): void {


    // Initialize or fetch your appointment data here
    this.requests = [
     { patientId: 1,
      patientImage: 'assets/img/patients/patient.jpg',
      patientName: 'Rajesh Kumar',
      appointmentDate: new Date('2023-10-25T15:30:00'),
      location: 'Delhi, India',
      email: 'rajesh@example.com',
      phone: '+91 98765 43210',
      labTests: ['Blood Test', 'Urine Test'],
    },
    {
      patientId: 2,
      patientImage: 'assets/img/patients/patient1.jpg',
      patientName: 'Priya Sharma',
      appointmentDate: new Date('2023-10-26T11:00:00'),
      location: 'Mumbai, India',
      email: 'priya@example.com',
      phone: '+91 87654 32109',
      labTests: ['Blood Test', 'Urine Test'],
    },
    {
      patientId: 3,
      patientImage: 'assets/img/patients/patient2.jpg',
      patientName: 'Amit Patel',
      appointmentDate: new Date('2023-10-27T14:45:00'),
      location: 'Ahmedabad, India',
      email: 'amit@example.com',
      phone: '+91 98765 12345',
      labTests: ['Blood Test'],
    },
    {
      patientId: 4,
      patientImage: 'assets/img/patients/patient3.jpg',
      patientName: 'Neha Gupta',
      appointmentDate: new Date('2023-10-28T10:30:00'),
      location: 'Pune, India',
      email: 'neha@example.com',
      phone: '+91 98765 67890',
      labTests: ['Blood Test', 'Urine Test','v-ray'],
    },
    {
      patientId: 5,
      patientImage: 'assets/img/patients/patient4.jpg',
      patientName: 'Rahul Singh',
      appointmentDate: new Date('2023-10-29T13:15:00'),
      location: 'Bangalore, India',
      email: 'rahul@example.com',
      phone: '+91 98765 54321',
      labTests: ['Blood Test', 'Urine Test','v-ray'],
    },
    {
      patientId: 6,
      patientImage: 'assets/img/patients/patient5.jpg',
      patientName: 'Pooja Verma',
      appointmentDate: new Date('2023-10-30T09:00:00'),
      location: 'Chennai, India',
      email: 'pooja@example.com',
      phone: '+91 98765 67891',
      labTests: ['Blood Test', 'Urine Test','v-ray'],
    },
    {
      patientId: 7,
      patientImage: 'assets/img/patients/patient6.jpg',
      patientName: 'Sandeep Yadav',
      appointmentDate: new Date('2023-10-31T16:30:00'),
      location: 'Hyderabad, India',
      email: 'sandeep@example.com',
      phone: '+91 98765 87654',
      labTests: ['Blood Test', 'Urine Test','v-ray'],
    },
    {
      patientId: 8,
      patientImage: 'assets/img/patients/patient7.jpg',
      patientName: 'Anita Das',
      appointmentDate: new Date('2023-11-01T12:00:00'),
      location: 'Kolkata, India',
      email: 'anita@example.com',
      phone: '+91 98765 43219',
      labTests: ['Blood Test', 'Urine Test','v-ray'],
    },
    {
      patientId: 9,
      patientImage: 'assets/img/patients/patient8.jpg',
      patientName: 'Vikram Singh',
      appointmentDate: new Date('2023-11-02T14:30:00'),
      location: 'Jaipur, India',
      email: 'vikram@example.com',
      phone: '+91 98765 98765',
      labTests: ['Blood Test', 'Urine Test'],
    },
    {
      patientId: 10,
      patientImage: 'assets/img/patients/patient9.jpg',
      patientName: 'Mala Gupta',
      appointmentDate: new Date('2023-11-03T11:45:00'),
      location: 'Lucknow, India',
      email: 'mala@example.com',
      phone: '+91 98765 87654'
    }
      
    ];
  }

  viewAppointmentDetails(request: any) {
    // Logic to  viewing appointment details
    console.log('View details for:',request);
  }

  acceptAppointment(request: any) {
    // Logic to  accept
    console.log('Accept appointment:', request);
  }

  cancelAppointment(request: any) {
    // Logic to cancel
    console.log('Cancel appointment:', request);
  }
}
