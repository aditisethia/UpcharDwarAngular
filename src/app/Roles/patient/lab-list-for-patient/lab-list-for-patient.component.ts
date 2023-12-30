import { Component } from '@angular/core';
import { Lab } from '../lab-forpatient/lab-forpatient.component';

@Component({
  selector: 'app-lab-list-for-patient',
  templateUrl: './lab-list-for-patient.component.html',
  styleUrls: ['./lab-list-for-patient.component.css']
})
export class LabListForPatientComponent {
labs:Lab[]=[{ name: "tfgyhj",
type: "fgvbh",
rating: 0,
feedbackCount: 0,
location: "dfgvh",
features: [{ imageUrl: "assets/img/features/feature-01.jpg" },{ imageUrl: "assets/img/features/feature-02.jpg" },{imageUrl: "assets/img/features/feature-03.jpg"}],
services: ["fghbnj"],
thumbsUp:2,
costRange:"hnjmk",
tooltip: "x",
image:"assets/img/features/feature-01.jpg" ,

},
{
  name: "tfgyhj",
  type: "fgvbh",
  rating: 0,
  feedbackCount: 0,
  location: "dfgvh",
  features: [{ imageUrl: "assets/img/features/feature-01.jpg" },{ imageUrl: "assets/img/features/feature-02.jpg" },{imageUrl: "assets/img/features/feature-03.jpg"}],
  services: ["fghbnj"],
  thumbsUp:2,
  costRange:"hnjmk",
  tooltip: "x",
  image:"assets/img/features/feature-01.jp" ,
}]
}
