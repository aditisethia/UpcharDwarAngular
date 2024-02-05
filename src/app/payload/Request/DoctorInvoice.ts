import { Appointment_Request } from 'src/app/payload/Request/Appointment_Request ';
import { Doctor_Request } from "./Doctor_Request";
import { PatientRequest } from "./ParientRequest";

export class DoctorInvoice {
  id: any;
  invoiceGenerateDate: any;
  amount: any;
  invoiceStatus: any;
  paymentMethod: any;

  doctor: Doctor_Request = new Doctor_Request;
  patient: PatientRequest = new PatientRequest;
  appointment: Appointment_Request = new Appointment_Request;
}
