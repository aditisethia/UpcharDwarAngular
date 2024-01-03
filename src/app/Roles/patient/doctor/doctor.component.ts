import { Component ,Input} from '@angular/core';
import { Doctor } from 'src/app/entity/DoctorList';
import { Doctor_Request } from 'src/app/payload/response/Request/Doctor_Request';


@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent {
  @Input()
  doctor!: Doctor_Request;
  constructor(){

}}
