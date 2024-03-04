import { Component ,Input, OnInit} from '@angular/core';
import { RouterModule } from '@angular/router';

import { Doctor_Request } from 'src/app/payload/Request/Doctor_Request';
import { DoctorScheduleService } from 'src/app/services/doctor-schedule.service';
import { DoctorserviceService } from 'src/app/services/doctor-service/doctorservice.service';


@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})

export class DoctorComponent {
  @Input()
  doctor!: Doctor_Request;

  constructor(private doctorService:DoctorserviceService,private scheduleservice: DoctorScheduleService){ }


  IMG_URLs = this.doctorService.IMAGE_URL;

  }

