import { ScheduleRequest } from '../../../payload/Request/ScheduleRequest';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from 'src/app/entity/Doctor';
import { TimeSlotRequest } from 'src/app/payload/Request/TimeSlotRequest';
import { DoctorScheduleService } from 'src/app/services/doctor-schedule.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-doctor-schedule-timings',
  templateUrl: './doctor-schedule-timings.component.html',
  styleUrls: ['./doctor-schedule-timings.component.css']
})
export class DoctorScheduleTimingsComponent implements OnInit {
  scheduleForm: FormGroup;
  timeSlots: TimeSlotRequest[] = [];
  ScheduleRequest: ScheduleRequest = new ScheduleRequest();
  doctor: Doctor = new Doctor();
  drid: any;


  constructor(private http: HttpClient, private fb: FormBuilder, private scheduleservice: DoctorScheduleService,private route:Router) {
    this.scheduleForm = this.fb.group({
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      timeDuration: [0, Validators.required],
      selectedDate: ['', Validators.required],
    });
  }

  getTodayDate(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');

    return `${year}-${month}-${day}`;
  }

  getFormattedTodayDate(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }


  ngOnInit(): void {
    this.ScheduleRequest.doctor = {id:0}; // Initialize the doctor property
    var userString = localStorage.getItem('user');
    if (userString) {
      var user = JSON.parse(userString);
      console.log(user.email  +"  ---->" + user.id);
      if (user.id) {
        this.scheduleservice.getdoctorbyuserid(user.id).subscribe((data: any) => {
          this.doctor = data.doctor;
          this.drid = data.doctor.id;
          console.log(this.doctor.id+"------------>");

          console.log(data);
          console.log(this.doctor+this.drid);
          this.ScheduleRequest.doctor.id = data.doctor.id;
        });
      }
    }
  }


  generateAllTimeSlots(): void {
    const formValues = this.scheduleForm.value;

    if (formValues.startTime && formValues.endTime && formValues.timeDuration && formValues.selectedDate) {
      const startDateTime = new Date(`2000-01-01T${formValues.startTime}`);
      const endDateTime = new Date(`2000-01-01T${formValues.endTime}`);
      const currentDate = new Date(formValues.selectedDate);

      this.timeSlots = []; // Clear existing time slots

      while (startDateTime.getTime() < endDateTime.getTime()) {
        const endTime = new Date(startDateTime.getTime() + formValues.timeDuration * 60000);

        // Always add the time slot to the array
        this.timeSlots.push({
          startTime: this.formatTime(startDateTime),
          endTime: this.formatTime(endTime),
          isBooked: false,
          isDeleted: false,
          id: 0
        });
        // this.ScheduleRequest.doctor.id=this.doctor.id;
        // this.ScheduleRequest.selectedDate = formValues.selecteddate;
        startDateTime.setMinutes(startDateTime.getMinutes() + formValues.timeDuration);
      }
    }

    console.log(this.timeSlots);
  }


  formatTime(date: Date): string {
    return date.toTimeString().slice(0, 5);
  }



  clearTimeSlots(): void {
    this.timeSlots = [];
  }


  removeTimeSlot(index: number): void {
    // Remove the time slot at the specified index
    this.timeSlots.splice(index, 1);
    console.log(this.timeSlots)
  }



  saveSchedule() {
    const formValues = this.scheduleForm.value;
    console.log(this.drid + "at save schedule");

    this.ScheduleRequest.doctor.id = this.doctor.id;
    console.log(this.ScheduleRequest.doctor.id+"---------------->");

    if (formValues.selectedDate && this.timeSlots.length > 0) {
      this.ScheduleRequest.selectedDate = formValues.selectedDate;
      this.ScheduleRequest.timeSlots = this.timeSlots;
      console.log(this.ScheduleRequest)
      this.scheduleservice.generatetimeslotesandschedule(this.ScheduleRequest).subscribe((data: any) => {
        console.log('Schedule saved successfully!', data);
        Swal.fire(({
          title: "Scheduled",
          text: "Time slotes has been successfully Scheduled",
          icon: "success"
        }));
         this.route.navigate(['/doctordashboard/myschedules']);

      }, (error: any) => {
        console.error('Error saving schedule:', error);
      });

    } else {
      console.warn('Please select a date and add time slots before saving.');


    }




  }

  formatTimeto12hr(time: string): string {
    const [hours, minutes] = time.split(':');
    let period = 'AM';

    let formattedHours = parseInt(hours, 10);

    if (formattedHours >= 12) {
      period = 'PM';
      formattedHours = formattedHours === 12 ? 12 : formattedHours - 12;
    }

    return `${formattedHours}:${minutes} ${period}`;
  }


}
