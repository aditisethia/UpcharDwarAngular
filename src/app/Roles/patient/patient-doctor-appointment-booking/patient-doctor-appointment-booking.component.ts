
import { DoctorserviceService } from 'src/app/services/doctor-service/doctorservice.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScheduleRequest } from 'src/app/payload/Request/ScheduleRequest';
import { DoctorScheduleService } from 'src/app/services/doctor-schedule.service';
import { DoctorRequest } from 'src/app/payload/Request/DoctorRequest';
import { Appointment_Request } from 'src/app/payload/Request/Appointment_Request ';
import Swal from 'sweetalert2';
import { LoginService } from 'src/app/services/user/login.service';
import { AppointmentserviceService } from 'src/app/services/doctor-service/appointmentservice.service';
import { PatientserviceService } from 'src/app/services/patient-service/patientservice.service';
import { TimesloteService } from 'src/app/services/doctor-service/timeslote.service';


@Component({
  selector: 'app-patient-doctor-appointment-booking',
  templateUrl: './patient-doctor-appointment-booking.component.html',
  styleUrls: ['./patient-doctor-appointment-booking.component.css']
})
export class PatientDoctorAppointmentBookingComponent {



  doctorInfos: DoctorRequest | undefined;
  Averagedoctorrating: number | undefined;
  drid: any | undefined;
  schedules: any[] = [];
  ScheduleRequest: ScheduleRequest[] | undefined;
  AppointMentRequest: Appointment_Request = new Appointment_Request;
  selectedDate: string = '';
  IMG_URLs = this.doctorService.IMAGE_URL;
  todaydate: string | undefined;
  pemail:any;


  constructor(private tsservice:TimesloteService,private patientservic:PatientserviceService,private appointmentService: AppointmentserviceService,private router: Router,private loginservice: LoginService, private doctorService: DoctorserviceService, private scheduleService: DoctorScheduleService, private route: ActivatedRoute, private doctorservice: DoctorserviceService) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.drid = this.route.snapshot.params['drid'];
      console.log(this.drid);
      if (this.drid != null)
        this.fetchSchedules(this.drid);
    });

    //for getting doctor on opening component
    this.getdoctorbyid(this.drid);

    //getting cyrrent user
    this.loginservice.getCurrentUser().subscribe((currentuser: any) => {
      // this.AppointMentRequest.patient = currentuser.id;
 this.pemail=currentuser.email;
   if(this.pemail!==null){
    this.getpatientbyemail();
   }

    });
  }



  getpatientbyemail(){

    //console.log(this.pemail);
    this.patientservic.getpatientbyemail(this.pemail).subscribe((data:any)=>{
      this.AppointMentRequest.patient=data;
      console.log("hello");
      console.log(this.AppointMentRequest);


    })

  }

  fetchSchedules(doctorId: number): void {
    console.log("doctorid----->>>>>>"+doctorId);

    this.scheduleService.getschedulesbydoctorid(doctorId).subscribe((data: any) => {
      this.ScheduleRequest = data;
      this.schedules = data;
    });
    this.getdate();
  }


  // getting todays date

  getdate() {
    const currentDate: Date = new Date();

    const year: number = currentDate.getFullYear();
    const month: number = currentDate.getMonth() + 1; // Note: Months are zero-indexed, so add 1
    const day: number = currentDate.getDate();

    const formattedDate: string = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    this.todaydate = formattedDate;

    this.AppointMentRequest.appointmentDate = this.todaydate;
    console.log("Current Date:", formattedDate);
  }

  //for FORMATE time in 12hr from 24hr

  formatTime(time: string): string {
    const [hours, minutes] = time.split(':');
    let period = 'AM';
    let formattedHours = parseInt(hours, 10);
    if (formattedHours >= 12) {
      period = 'PM';
      formattedHours = formattedHours === 12 ? 12 : formattedHours - 12;
    }
    const formattedHoursString = (formattedHours < 10 ? '0' : '') + formattedHours;
    return `${formattedHoursString}:${minutes} ${period}`;
  }



  getdoctorbyid(drid: any) {
    this.doctorservice.getdoctorbyydrId(drid).subscribe((doctor: any) => {
      this.doctorInfos = doctor;
      console.log(doctor);
      this.Averagedoctorrating = this.calculateAverageRating(doctor);
      console.log(this.Averagedoctorrating);
      this.AppointMentRequest.doctor = doctor;
    })
  }



  //both methods are for calculate rating and manage star icons

  calculateAverageRating(doctor: any): number {
    if (!doctor.doctorReviewRatings || doctor.doctorReviewRatings.length === 0) {
      return 0;
    }
    const sumOfRatings = doctor.doctorReviewRatings.reduce((sum: any, rating: { rating: any; }) => sum + rating.rating, 0);
    const averageRating = sumOfRatings / doctor.doctorReviewRatings.length;
    return Math.round(averageRating * 10) / 10;
  }
  getStarArray(rating: number | undefined): number[] {
    return Array(5).fill(0).map((_, index) => index + 1);
  }


  //for selecting timeslote and set purpose

  selectTimeSlot(timeSlot: any) {
    console.log(timeSlot);
    // this.AppointMentRequest.timeslote.id = timeSlot;
    this.tsservice.gettimeslotesbyuserid(timeSlot).subscribe((data:any)=>{
      this.AppointMentRequest.timeslote=data;
      console.log(data);

    })
    Swal.fire({
      title: 'Enter Purpose Of Appointment:',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Submit',
      showLoaderOnConfirm: true,
      preConfirm: (inputValue) => {
        if (!inputValue) {
          Swal.showValidationMessage('You need to enter something!');
        }
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result: any) => {
      if (result.isConfirmed ||this.AppointMentRequest.doctor!==null || this.AppointMentRequest.patient!==null ||this.AppointMentRequest.timeslote!==null) {
        const inputValue = result.value;
        this.AppointMentRequest.purpose = inputValue;
        console.log(this.AppointMentRequest);
        this.appointmentService.setAppointmentData(this.AppointMentRequest);

        this.router.navigate(['/patientmaindashboard/checkout'])

      }
    });
    console.log(timeSlot);
  }




}





