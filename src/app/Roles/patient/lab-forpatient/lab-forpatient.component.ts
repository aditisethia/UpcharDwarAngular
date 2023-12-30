
export interface Lab {
  name: string;
  type: string;
  rating: number;
  feedbackCount: number;
  location: string;
  features: { imageUrl: string }[];
  services: string[];
  thumbsUp: number;
  costRange: string;
  tooltip: string;
  image: string;
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lab-forpatient',
  templateUrl: './lab-forpatient.component.html',
  styleUrls: ['./lab-forpatient.component.css']
})
export class LabForpatientComponent {

  @Input() lab !: Lab ;

  constructor() {
    this.lab={
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
    }
  }
}
