import { Component } from '@angular/core';

@Component({
  selector: 'app-lab-reviewrating',
  templateUrl: './lab-reviewrating.component.html',
  styleUrls: ['./lab-reviewrating.component.css']
})
export class LabReviewratingComponent {
  comments = [
    {
      author: 'Richard Wilson',
      date: '2 Days ago',
      rating: 4,
      recommend: true,
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Curabitur non nulla sit amet nisl tempus'
    },
    {
      author: 'anneta',
      date: '2 Days ago',
      rating: 3,
      recommend: true,
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Curabitur non nulla sit amet nisl tempus'
    },
    {
      author: 'Risdfcgbhjnk',
      date: '2 Days ago',
      rating: 1,
      recommend: true,
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Curabitur non nulla sit amet nisl tempus'
    },
  ];
}
