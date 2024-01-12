import { Lab } from "src/app/entity/Lab";
import { LabTest } from "src/app/entity/LabTest";
import { Patient } from "src/app/entity/Patient";

export class LabAppointment_Request {
    appointmentDate!: any;
    purpose!: string;
    patient: Patient = new Patient;
    labTest: LabTest = new LabTest;
    labInvoice: any;
    patientLabAppointmentFile: any;
    lab :Lab=new Lab;
  }
