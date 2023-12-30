import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-doctor-schedule-timings',
  templateUrl: './doctor-schedule-timings.component.html',
  styleUrls: ['./doctor-schedule-timings.component.css']
})
export class DoctorScheduleTimingsComponent implements OnInit {
  scheduleForm: FormGroup;
  timeSlots: TimeSlot[] = [];
  finaltimeslotes :TimeSlot[]=[];

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.scheduleForm = this.fb.group({
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      timeDuration: [0, Validators.required],
      selectedDate: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    // Initialization logic, if needed
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
          endTime: this.formatTime(endTime)
        });

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



  saveSchedule(){

  }




}

interface TimeSlot {
  startTime: string;
  endTime: string;
}
