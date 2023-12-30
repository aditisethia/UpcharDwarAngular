export class PatientAppointmentResponse{
    id: number=0;
    patientName: string='';
    appointmentDate: string=''; // Assuming the date is sent as a string (you may need to adjust based on your backend date formatting)
    purpose: string='';
    paidAmount: number=0;
    status: string='';
    appointmentTime: string=''; // Assuming the time is sent as a string (you may need to adjust based on your backend time formatting)
    dId: number=0;
    email: string='';
    mobile: string='';
    doctorName: string='';
}