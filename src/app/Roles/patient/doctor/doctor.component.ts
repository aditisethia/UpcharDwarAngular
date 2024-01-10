import { Component ,Input} from '@angular/core';
import { Doctor } from 'src/app/entity/DoctorList';
import { Doctor_Request } from 'src/app/payload/Request/Doctor_Request';
import { DoctorserviceService } from 'src/app/services/doctor-service/doctorservice.service';


@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent {
  @Input()
  doctor!: Doctor_Request;
  IMG_URLs = this.doctorService.IMAGE_URL;
  constructor(private doctorService:DoctorserviceService){

}}
