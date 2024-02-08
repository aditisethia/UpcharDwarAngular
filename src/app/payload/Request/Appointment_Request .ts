import { Doctor_Request } from 'src/app/payload/Request/Doctor_Request';
import { TimeSlotRequest } from "./TimeSlotRequest";
import { Patient } from 'src/app/entity/Patient';

export class Appointment_Request {
  id:any;
  bookingdate:any;
  appointmentDate!: any;
  status: any;
  purpose!: string;
  timeslote: TimeSlotRequest = new TimeSlotRequest;
  patient: Patient = new Patient;
  doctor: Doctor_Request = new Doctor_Request;
  patientAppointmentFile: any;
}
