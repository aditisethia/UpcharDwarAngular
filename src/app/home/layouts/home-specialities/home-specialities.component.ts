import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-specialities',
  templateUrl: './home-specialities.component.html',
  styleUrls: ['./home-specialities.component.css']
})
export class HomeSpecialitiesComponent implements OnInit {
  specialties = [
      { name: 'Urology', image: '../../../../assets/img/specialities/specialities-01.png' },
      { name: 'Neurology', image: '../../../../assets/img/specialities/specialities-02.png' },
      { name: 'ortho', image: '../../../../assets/img/specialities/specialities-03.png' },
      { name: 'Heartology', image: '../../../../assets/img/specialities/specialities-04.png' },
      { name: 'Dentology', image: '../../../../assets/img/specialities/specialities-05.png' },
     
  ];

  constructor() { }

  ngOnInit() {

  } 
 
}
