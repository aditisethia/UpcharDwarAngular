import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiRoutes } from 'src/app/utils/Api-Routes';

@Injectable({
  providedIn: 'root'
})
export class LabReviewService {

  constructor(private  _http:HttpClient) { }

  getReviewBylabId(labId: any) {
    console.log(labId+"he")
    const url = ApiRoutes.GET_LABREVIEW_BY_Lab_ID+`${labId}`;
    console.log(url);

    return this._http.get(url);
  }


  addReview(review:any){
    return this._http.post(ApiRoutes.ADD_LAB_REVIEW,review);
  }


  addReply(reply:any){
    return this._http.post(ApiRoutes.ADD_LAB_REPLY,reply);
  }


  deleteReviewOfPatient(reviewId:any){
    return this._http.delete(ApiRoutes.DELETE_REVIEW_OF_LAB+`${reviewId}`);
  }


  deleteReplyOfPatient(replyId:number,reviewId:number){
    return this._http.delete(ApiRoutes.DELETE_REPLAY_OF_REVIEW +`${reviewId}`+'/'+`${replyId}`);
  }
}
