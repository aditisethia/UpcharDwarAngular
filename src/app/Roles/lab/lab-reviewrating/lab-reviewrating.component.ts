import { Component } from '@angular/core';
import { Lab } from 'src/app/entity/Lab';
import { LabReview } from 'src/app/entity/lab-review';
import { LabReviewService } from 'src/app/services/Lab-service/lab-review.service';
import { LabServiceService } from 'src/app/services/Lab-service/lab-service.service';
import { LoginService } from 'src/app/services/user/login.service';
import Toast from 'src/app/utils/Sweet-alert-message';

@Component({
  selector: 'app-lab-reviewrating',
  templateUrl: './lab-reviewrating.component.html',
  styleUrls: ['./lab-reviewrating.component.css']
})
export class LabReviewratingComponent {
  comments: LabReview[] = [];
  labId: any;
  lab:Lab=new Lab;
  IMG_URLs = this.labService.IMAGE_URL;
  constructor(private loginservice:LoginService, private labService:LabServiceService,private labReviewRatingService:LabReviewService){}

  ngOnInit(): void
  {

    this.labService.lab.subscribe((data: any) => {
      this.lab = data.Lab;
      this.labId=this.lab.id;
      console.log(data.Lab);
      console.log(this.labId+"tututut");
      this.getReviewOfLab(this.labId);
    });
   
}
  
getStarIcons(rating: number): string[] {
   

  let starsArray: string[] = [];
  let i = 0
  for (i = 0; i < rating; i++) {
    starsArray.push('fas fa-star filled');

  }
  for (let j = i; j < 5; j++) {
    starsArray.push('fas fa-star');


  }


  return starsArray;
}

getReviewOfLab(id:number){
  this.labReviewRatingService.getReviewBylabId(id)
  .subscribe((data: any) => {
    this.comments = data.ReviewRating;
    console.log(this.comments[0].rating);

    console.log(this.comments);

  });
}
deleteReview(reviewId: number): void {
  // Call backend service to delete review
  this.labReviewRatingService.deleteReviewOfPatient(reviewId).subscribe(
    (response:any) => {
      Toast.fire({
        icon: 'success',
        title: response.message,
    
      })
    console.log(response);
    
    
    }, (error)=>{
     
    }
  )
  };

  deleteReply(replayId:any,reviewId: number): void {
    // Call backend service to delete review
    
    this.labReviewRatingService.deleteReplyOfPatient(replayId,reviewId).subscribe(
      (response:any) => {
        Toast.fire({
          icon: 'success',
          title: response.message,
      
        })
      console.log(response);
      
      this.getReviewOfLab(this.labId);
      }, (error)=>{
       
      }
    )
    };
}
