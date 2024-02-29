import { Component } from '@angular/core';
import { LabAppointment_Request } from 'src/app/payload/Request/LabAppointment_Request';
import { LabBookingListResponse } from 'src/app/payload/response/Response/LabBookingListResponse';
import { LabRegistrationResponse } from 'src/app/payload/response/Response/LabRegistrationResponse';
import { LabAppointmentServiceService } from 'src/app/services/Lab-service/lab-appointment-service.service';
import { LabServiceService } from 'src/app/services/Lab-service/lab-service.service';
import Toast from 'src/app/utils/Sweet-alert-message';

@Component({
  selector: 'app-lab-dashboard-data',
  templateUrl: './lab-dashboard-data.component.html',
  styleUrls: ['./lab-dashboard-data.component.css']
})
export class LabDashboardDataComponent {
 

 
  upcomingLabTest: any[] = [];
  todayLabTest: LabBookingListResponse[] | undefined;
  lab!: LabRegistrationResponse;
  labId: number = 0;
  totalBooking: any = null; // Initialize with null
  todaysTotalBookings:any=null;
  totalSuccessfulService:any=null;
  constructor(private labService: LabServiceService, private labBookingService: LabAppointmentServiceService) {}

  ngOnInit() {
    this.labService.lab.subscribe((data: any) => {
      this.lab = data.Lab;
      this.labId = this.lab.id;
      console.log(this.labId + "------@@@------");
      this.getAllBookingOfLab(this.labId);
      this.totalBookings();
      this.todaysTotalBooking();
      this.CountOfService();
    });

    this.upcomingLabTest = [
      { clientName: 'Richard Wilson', requestDate: '16 Nov 2019', purpose: 'General', fortest: 'New Patient', paidAmount: '$150', patientAvatar: 'assets/img/patients/patient1.jpg' },
      { clientName: 'aman patidar', requestDate: '15 Nov 2019', purpose: 'fever', fortest: 'old Patient', paidAmount: '$110', patientAvatar: 'assets/img/patients/patient2.jpg' },
      { clientName: 'jay solanki', requestDate: '15 Nov 2019', purpose: 'General', fortest: 'New Patient', paidAmount: '$200', patientAvatar: 'assets/img/patients/patient3.jpg' },
      { clientName: 'rohit  sharma', requestDate: '17 Nov 2019', purpose: 'General', fortest: 'New Patient', paidAmount: '$500', patientAvatar: 'assets/img/patients/patient4.jpg' },
      { clientName: 'kapil solanki', requestDate: '18 Nov 2019', purpose: 'General', fortest: 'New Patient', paidAmount: '$750', patientAvatar: 'assets/img/patients/patient5.jpg' }
    ];
  }
  
  getAllBookingOfLab(id: number) {
    this.labService.getAllBooking(id).subscribe((data: any) => {
      this.todayLabTest = data;
    });
  }

  changeStatusBooking(labTestId: number, labId: any, bookingId: number) {
    this.labBookingService.changeStatus(labTestId, labId, bookingId).subscribe((response: any) => {
      Toast.fire({
        icon: 'success',
        title: response.message
      });
      this.getAllBookingOfLab(labId);
    });
  }

  totalBookings() {
    this.labBookingService.totalBookingOfLab(this.labId).subscribe(
      (data: any) => {
        this.totalBooking = data;
        alert(this.totalBooking+":totalBooking")
        this.updateDashWidgets();
      }
    );
  }

  updateDashWidgets() {
    this.dashWidgets[0].value = this.totalBooking;
    this.dashWidgets[1].value=this.todaysTotalBookings;
    this.dashWidgets[2].value=this.totalSuccessfulService;
  }

  todaysTotalBooking(){
    this.labBookingService.todaysTotalBookingOfLab(this.labId).subscribe(
      (data: any) => {
        this.todaysTotalBookings = data;
        alert(this.totalBooking+":totalBooking")
        this.updateDashWidgets();
      }
    );
  }

  CountOfService(){
    this.labBookingService.serviceProvided(this.labId).subscribe(
      (data: any) => {
        this.totalSuccessfulService = data;
        alert(this.totalSuccessfulService+":totalBooking")
        this.updateDashWidgets();
      }
    );
  }
  dashWidgets = [
    { icon: 'assets/img/icon-01.png', title: 'Total test', value: this.totalBooking, subtitle: 'Till Today', percentage: 75 },
    { icon: 'assets/img/icon-02.png', title: 'Todays test', value: this.todaysTotalBookings, subtitle: 'Todays', percentage: 65 },
    { icon: 'assets/img/icon-03.png', title: 'test successfully  performed', value: this.totalSuccessfulService, subtitle: '06, Apr 2019', percentage: 50 }
  ];
}
