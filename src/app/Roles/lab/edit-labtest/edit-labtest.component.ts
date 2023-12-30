import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-labtest',
  templateUrl: './edit-labtest.component.html',
  styleUrls: ['./edit-labtest.component.css']
})
export class EditLabtestComponent {

  labTest: {
    name: string;
    image: string;
    location: string;
    availability: string;
    feeRange: string;
    description: string;
    price: string;
    rate: string;
    time: string;
  } = {
    name: 'sugarTest',
    image: 'https://altahealthgroup.com/wp-content/uploads/2016/12/lab-tests-1024x768.jpg',
    location: 'City X',
    availability: 'Mon-Fri, 9 AM - 5 PM',
    feeRange: '$50 - $100',
    description: 'Pathology is the study of disease and injury. The word pathology also refers to the study of disease in general, incorporating a wide range of biology research fields and medical practices.',
    price: '$60',
    rate: 'Normal',
    time: '',
  };


  //private labTestService: LabTestService
  constructor() {}

  ngOnInit(): void {
    // Load the lab test details from your service (replace 'labTestId' with the actual ID or identifier)
    //this.loadLabTestDetails('labTestId');
  }

  private loadLabTestDetails(id: string) {
    // Assuming you have a labTestService with a method like getLabTestById
    //const loadedLabTest = this.labTestService.getLabTestById(id);

    // Check if a lab test with the specified ID was found
   // if (loadedLabTest) {
    //  this.labTest = loadedLabTest;
    }
  

  updateLabTest() {
    // Assuming you have a labTestService with a method like updateLabTest
    //this.labTestService.updateLabTest(this.labTest);
    // You may want to handle success or error cases here
  }
}
