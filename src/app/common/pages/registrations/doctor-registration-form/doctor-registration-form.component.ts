import { HttpErrorResponse, HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { event } from 'jquery';
import { Doctor } from 'src/app/entity/Doctor';
import { DoctorRequest } from 'src/app/payload/Request/DoctorRequest';
import { DoctorserviceService } from 'src/app/services/doctor-service/doctorservice.service';
import Swal from 'sweetalert2';
import { saveAs } from 'file-saver';
import { Speciality } from 'src/app/entity/speciality';
import { DoctorQualification } from 'src/app/entity/DoctorQualification';
import { LoginService } from 'src/app/services/user/login.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-doctor-registration-form',
  templateUrl: './doctor-registration-form.component.html',
  styleUrls: ['./doctor-registration-form.component.css']
})
export class DoctorRegistrationFormComponent implements OnInit {

  currentLevel: number = 1;




  filenames: string[] = [];
  fileStatus = { status: '', requestType: '', percent: 0 };
  constructor(private _doctorService: DoctorserviceService, private loginService: LoginService) { }

  doctor!: DoctorRequest;

  specialities: Speciality[] = [];
  specility: Speciality = new Speciality();
  qualification = [] = [new DoctorQualification()];
  awardList: string[] = ['']; // Initialize the awardList with an empty string
  user:any;



  ngOnInit() {
  this.loginService.getCurrentUser().subscribe((data:any)=>
  {
   this.doctor=data;
   this.doctor.awards =[];
       this.doctor.email = data.email;
      this.doctor.name = data.name;


  });


    this.doctor = new DoctorRequest();
    this.doctor.awards = [];


    //});
    this.getAllSpecilities();


  //   this.loginService.currentUser.subscribe((data:any) => {

  //     this.doctor = data;
  //     console.log(data);
  //     this.doctor.awards =[];
  //     this.doctor.email = data.email;
  //     this.doctor.name = data.name;
  //   })

   }


  getAllSpecilities() {
    this._doctorService.getALLSpeciality().subscribe((data: any) => {
      this.specialities = data;
      console.log(this.specialities[0].spName);

    })
  }


  msg = '';

  addNewColumn(type: any) {
    // Add a new qualification object with default values

    if (type == 1)
      this.qualification.push(new DoctorQualification());
    else if (type == 2) {
      this.doctor.awards.push('');

      console.log(this.doctor);

    }

  }

  // define a function upload data
  onUploadFiles(event: any, type: number): void {
    if (type == 1) {
      let files: File[] = event.target.files;
      this.doctor.doctorDocumentsFiles = files;
    }
    else if (type == 2) {

      this.doctor.doctorDocumentsFiles = event.target.files[0];
    }


  }

  //save studentx`
  saveDoctor() {
    this.doctor.qualifications = this.qualification;
    // this.doctor.awards=this.awardList;
    console.log(this.doctor);

    this._doctorService.upload(this.doctor).subscribe(
      data => {
        console.log(data);

        Swal.fire('Successfully Done!!', '', 'success');
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  // define a function download files
  onDownloadFiles(filename: string): void {

    this._doctorService.download(filename).subscribe(
      event => {
        console.log(event);
        this.resportProgress(event, filename);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  private resportProgress(httpEvent: HttpEvent<string[] | Blob>, filename: string): void {

    switch (httpEvent.type) {
      case HttpEventType.UploadProgress:
        this.updateStatus(httpEvent.loaded, httpEvent.total!, 'Uploading');
        break;

      case HttpEventType.DownloadProgress:
        this.updateStatus(httpEvent.loaded, httpEvent.total!, 'Downloading');
        break;

      case HttpEventType.ResponseHeader:
        console.log('Header returned', httpEvent)
        break;

      case HttpEventType.Response:
        if (httpEvent.body instanceof Array) {
          this.fileStatus.status = 'done';
          for (const filename of httpEvent.body) {
            this.filenames.unshift(filename);
          }
        } else {
          //download logic
          saveAs(new File([httpEvent.body!], filename,
            { type: `${httpEvent.headers.get('Content-Type')}; charset=utf-8` }));
        }

        // saveAs(new Blob([httpEvent.body!],
        // {type: `${httpEvent.headers.get('Content-Type')}; charset=utf-8`}),
        // (httpEvent.headers.get('File-Name'));
        this.fileStatus.status = 'done';
        break;
      default:
        console.log(httpEvent);
    }
  }
  private updateStatus(loaded: number, total: number, requestType: string) {

    this.fileStatus.status = 'progress';
    this.fileStatus.requestType = requestType;
    this.fileStatus.percent = Math.round(100 * loaded / total);
  }



  saveUser() {
    // Implement the logic to save the user with documents
    console.log('User with documents:', this.doctor);
  }




  nextLevel() {
    if (this.currentLevel < 5) {
      this.currentLevel++;
    }
  }

  prevLevel() {
    if (this.currentLevel > 1) {
      this.currentLevel--;
    }
  }

  onFileSelected(event: any) {



  }

}
