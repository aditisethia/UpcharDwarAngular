import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent {
  
  @Input() currentRating: number = 0;
  @Output() ratingClicked: EventEmitter<number> = new EventEmitter<number>();

  rate(rating: number): void {
    this.currentRating = 5 - rating;
    this.ratingClicked.emit(this.currentRating);
  }
}


