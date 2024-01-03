import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdateLabTestRequest } from 'src/app/payload/UpdateLabTestRequest';
import { CreateLabTestResponse } from 'src/app/payload/response/CreateLabTestResponse';
import { UpdateLabTestResponse } from 'src/app/payload/response/UpdateLabTestResponse';
import { LabTestService } from 'src/app/services/Lab-service/lab-test.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-labtest',
  templateUrl: './edit-labtest.component.html',
  styleUrls: ['./edit-labtest.component.css']
})
export class EditLabtestComponent {

labTest !:any;
labTestId=0;
  labtestcg: UpdateLabTestRequest = new UpdateLabTestRequest;

constructor(private labTestService:LabTestService, private _route: ActivatedRoute, private router:Router){}




  ngOnInit(): void {
   this.labTestId= this._route.snapshot.params['id'];
   console.log(this.labTestId);
   
    this.loadLabTestDetails(this.labTestId);
    
  }

  private loadLabTestDetails(id: any) {
        this.labTestService.getLabTestById(id).subscribe((data:any)=>{
          this.labTest=data.LABTEST;
          console.log(this.labTest);
          
        })
    }
  
    updateLabTest(id: any) {
      console.log(this.labtestcg+"hellooo");

      const updateData: UpdateLabTestRequest = {
        testName: this.labtestcg.testName || this.labTest.testName,
        ratings: this.labtestcg.ratings || this.labTest.ratings,
        description: this.labtestcg.description || this.labTest.description,
        rates: this.labtestcg.rates || this.labTest.rates,
        availability: this.labtestcg.availability !== undefined ? this.labtestcg.availability : this.labTest.availability,
      };
  
      this.labTestService.updateLabTest(id, updateData).subscribe(
        (data: any) => {
          console.log(data.updateLabTest);
          Swal.fire(data.message);
          this.router.navigate(['/labdashboard/labslist']);
        },
        (error) => {
          console.error('Error updating lab test:', error);
          Swal.fire('Error updating lab test. Please try again.');
        }
      );
    }
}
