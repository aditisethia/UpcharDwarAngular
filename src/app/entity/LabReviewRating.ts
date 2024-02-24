import { Lab } from "./Lab";
import { Patient } from "./Patient";

export class LabReviewRating{
     id: number=0;
     patient !: Patient;
     lab !: Lab;
    rating: number=0;
     review: string='';
}