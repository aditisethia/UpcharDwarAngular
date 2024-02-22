import { LabReviewReplayResponse } from "./lab-review-replay-response";

export class LabReview {
    id: number = 0;

    rating: number = 0;
    labId: number = 0;
    patientId: number = 0;
    description: string = '';

    patientName: string = '';

    imageName: string = '';
    replyResponse: LabReviewReplayResponse[] = []

    replyContent: string = ''; // For storing the reply content
    showReplyForm: boolean = false; 
}
