import { DoctorScheduleService } from 'src/app/services/doctor-schedule.service';
import { ScheduleRequest } from './../../../payload/response/Request/ScheduleRequest';
import { Component, OnInit } from '@angular/core';
import { data, error } from 'jquery';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-my-schedules',
  templateUrl: './my-schedules.component.html',
  styleUrls: ['./my-schedules.component.css']
})
export class MySchedulesComponent implements OnInit {

  ScheduleRequest: ScheduleRequest[] | undefined;

  constructor(private scheduleservice: DoctorScheduleService) { }
  ngOnInit(): void {

    this.scheduleservice.getschedulesbydoctorid(1).subscribe((data: any) => {
      console.log(data);
      this.ScheduleRequest = data;
    }, (error: any) => {
      console.log(error);
    });
  }

  getDayOfWeek(dateString: string): string {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(dateString);
    const dayOfWeekIndex = date.getDay();
    return daysOfWeek[dayOfWeekIndex];
  }



  formatTime(time: string): string {
    const [hours, minutes] = time.split(':');
    let period = 'AM';

    let formattedHours = parseInt(hours, 10);

    if (formattedHours >= 12) {
      period = 'PM';
      formattedHours = formattedHours === 12 ? 12 : formattedHours - 12;
    }

    return `${formattedHours}:${minutes} ${period}`;
  }

  deleteSchedule(scheduleId: number): void {

    this.scheduleservice.deleteschedulebyid(scheduleId).subscribe((data) => {
      console.log(data);
    }, (error: any) => {
      console.log(error);
    });
    window.location.reload();
    Swal.fire(({
      title: "Deleted",
      text: "Time slotes has been successfully Deleted",
      icon: "success"
    }));
    console.log(`Deleting schedule with ID: ${scheduleId}`);
  }


  deleteScheduleConfirmation(scheduleId: number): void {
    Swal.fire({
      title: 'Confirmation',
      text: 'Are you sure you want to delete this schedule?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        // User clicked 'Yes'
        this.deleteSchedule(scheduleId);
      }
    });
  }
}
