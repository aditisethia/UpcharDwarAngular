import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LabReview } from 'src/app/entity/lab-review';
import { LabReviewReplayResponse } from 'src/app/entity/lab-review-replay-response';

import { GetLabRequest } from 'src/app/payload/Request/GetLabRequest';

import { LabReviewService } from 'src/app/services/Lab-service/lab-review.service';
import { LabServiceService } from 'src/app/services/Lab-service/lab-service.service';
import { PatientserviceService } from 'src/app/services/patient-service/patientservice.service';
import { LoginService } from 'src/app/services/user/login.service';
import Toast from 'src/app/utils/Sweet-alert-message';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lab-profile',
  templateUrl: './lab-profile.component.html',
  styleUrls: ['./lab-profile.component.css']
})
export class LabProfileComponent {

  id: any;
  lab: GetLabRequest = new GetLabRequest;
  pid: any
  IMG_URLs = this.labService.IMAGE_URL;
  pemail: any
  labReviews: LabReview[] = [];
  pName: any
  pImage: any;
  loggedInPatientId: any;


  remainingCharacters: number = 100;
  termsAccepted: boolean = false;
  description: string = '';
  starsArray: number[] = Array(5).fill(0).map((_, index) => index + 1);
  selectedRating: number = 0;
  reply: LabReviewReplayResponse = new LabReviewReplayResponse
  isLoggedIn: boolean = false;
  displayedRepliesCount: { [key: number]: number } = {};
  constructor(private router: Router, private route: ActivatedRoute, private labService: LabServiceService, private patientservice: PatientserviceService,
    private loginservice: LoginService,

    private labReviewRatingService: LabReviewService) { }

  ngOnInit() {
    // Get the ID parameter from the URL
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.labById(this.id)

    this.loadLabReviews();

    this.loginservice.getCurrentUser().subscribe((currentuser: any) => {
      // this.AppointMentRequest.patient = currentuser.id;
      this.isLoggedIn = !!currentuser;
      this.pemail = currentuser.email;
      if (this.pemail !== null) {
        console.log(this.pemail);

        this.getpatientbyemail();
      }
      else {

      }

    });
  }

  labById(labId: any): void {
    this.labService.getLabByLabId(labId)
      .subscribe((response: any) => {
        this.lab = response.Lab
        console.log(response);

      });
  }

  // Assuming this is part of your component class
  labButtonClicked: { [key: number]: boolean } = {};
  responseMessages: { [key: number]: string } = {};

  makeLabFavorite(labId: number): void {
    // Set the flag to true when the button is clicked
    if (!this.loginservice.isLoggedIn()) {
      Swal.fire({
        icon: 'info',
        title: 'Login Required',
        text: 'Please login to book a lab test.',
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['/login'], { queryParams: { returnUrl: this.router.url } });
        }
      });
      return;
    }
    this.labButtonClicked[labId] = true;

    this.labService.makeLabFavorite(labId, this.pid).subscribe(
      (response: any) => {
        if (response.message === 'Lab is already added as a favorite for this patient') {
          this.responseMessages[labId] = `Lab  is already added as a favorite for this patient`;
        } else if (response.message === 'success') {
          this.responseMessages[labId] = `Lab  added as a favorite!`;
        } else {
          this.responseMessages[labId] = `An unexpected error occurred for Lab .`;
        }
      },
      (error) => {
        this.responseMessages[labId] = error.error.message || 'An error occurred while processing your request.';
      }
    );
  }


  getpatientbyemail() {

    //console.log(this.pemail);
    this.patientservice.getpatientbyemail(this.pemail).subscribe((data: any) => {

      this.pid = data.id;
      this.loggedInPatientId = this.pid;
      this.pName = data.pName;
      this.pImage = data.imageName;
      // alert(this.pid)


    })

  }

  loadLabReviews(): void {
    this.labReviewRatingService.getReviewBylabId(this.id)
      .subscribe((data: any) => {
        this.labReviews = data.ReviewRating;
        console.log(this.labReviews[0].rating);

        console.log(this.labReviews);

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



  showMoreReplies(review: any) {
    review.showAllReplies = !review.showAllReplies;
  }

  submitReview() {
    if (!this.description || !this.termsAccepted) {
      alert('Please fill in all fields and accept the terms.');
      return;
    }

    const newReview = {
      patientName: this.pName,
      date: 'Just now',
      rating: this.selectedRating,
      description: this.description,
      patientId: this.pid,
      labId: this.lab.id,
    };
    console.log("REVIEW :: " + newReview.description);
    console.log("REVIEW :: " + newReview.rating);

    this.labReviewRatingService.addReview(newReview).subscribe((data: any) => {
      console.log("DATA :: ", data.data);

      let obj = this.labReviews.find(obj => obj.id == data.data.id) as LabReview;
      if (obj) {
         obj.description=data.data.description
        
      } else {
        this.labReviews.push(data.data);
      }
      
      Toast.fire({
        icon: 'success',
        title: data.message,

      })
     
    });
   
  }

  updateCharacterCount() {
    this.remainingCharacters = 100 - this.description.length;
  }


  // Inside your component

  submitReply(review: LabReview) {
    console.log(review);
    const newReply = {
      rating: this.selectedRating, // Assuming you have a selectedRating property for the reply rating
      patientId: this.pid,
      description: review.replyContent,
      reviewRatingId: review.id, // Assuming review.id corresponds to the ID of the review being replied to
      patientName: this.pName,
      imageName: this.pImage

    };


    this.labReviewRatingService.addReply(newReply).subscribe(
      (response: any) => {
        console.log('Reply submitted successfully:', response);
        review.replyContent = '';
        review.showReplyForm = false; // Hide the reply form
        let obj: LabReview = this.labReviews.find(obj => obj.id == response.message.reviewRatingId) as LabReview
        obj.replyResponse.push(response.message)
        console.log('----', obj);
      },
      (error) => {
        console.error('Error submitting reply:', error);
      }
    );
  }

  deleteReview(reviewId: number): void {
    // Call backend service to delete review
    this.labReviewRatingService.deleteReviewOfPatient(reviewId).subscribe(
      
      (response: any) => {
        Toast.fire({
          icon: 'success',
          title: response.message,
        })
      this.labReviews=[];
        this.loadLabReviews();
        console.log(response); 
      }, (error) => {

      }
    )
  };

  deleteReply(replayId: any, reviewId: number): void {
    // Call backend service to delete review
    this.labReviewRatingService.deleteReplyOfPatient(replayId, reviewId).subscribe(
      
      (response: any) => {
       
        Toast.fire({
          icon: 'success',
          title: response.message,

        })
        console.log(response);
 this.loadLabReviews();
        
      }, (error) => {

      }
    )
  };

  loadMoreReplies(review: LabReview): void {
    // Check if displayedRepliesCount for the current review ID is undefined or null
    if (!this.displayedRepliesCount[review.id]) {
      // If it's undefined or null, initialize it to 2 for the first load
      this.displayedRepliesCount[review.id] = 2;
    } else {
      // If it's not undefined or null, increment it by 2 for subsequent loads
      this.displayedRepliesCount[review.id] += 2;
    }
  }

}




