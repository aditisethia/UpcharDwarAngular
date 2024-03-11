
import { DoctorRequest } from "./DoctorRequest";
import { PatientRequest } from "./ParientRequest";

export class DoctorReviewRating {
  id!: number;
  patient: PatientRequest = new PatientRequest; // Make sure to import and define Patient class
  doctor: DoctorRequest = new DoctorRequest; // Make sure to import and define Doctor class
  comment!: string;
  rating!: number;
  date!: Date;
}
