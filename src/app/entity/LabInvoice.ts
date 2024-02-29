import { LabAppointment_Request } from "../payload/Request/LabAppointment_Request";
import { LabTest } from "./LabTest";
import { Patient } from "./Patient";

export class LabInvoice {
    invoiceId:any;
    booking:LabAppointment_Request=new LabAppointment_Request;
    labTest: LabTest = new LabTest();
    totalAmount: any;
    labId:any;
    invoiceGenerateDate: any;
    paymentMethod: any;
    patient: Patient = new Patient();

  }