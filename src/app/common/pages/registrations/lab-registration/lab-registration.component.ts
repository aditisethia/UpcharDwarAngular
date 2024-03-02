import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Lab } from 'src/app/entity/Lab';
import { Location } from 'src/app/entity/Location';
import { LabRegistrationRequest } from 'src/app/payload/Request/LabRegistrationRequest';
import { LabServiceService } from 'src/app/services/Lab-service/lab-service.service';
import { LoginService } from 'src/app/services/user/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lab-registration',
  templateUrl: './lab-registration.component.html',
  styleUrls: ['./lab-registration.component.css'],
})
export class LabRegistrationComponent implements OnInit {
  labForm!: FormGroup;
  location1: Location = {
    id: 0,
    addressLine: '',
    area: '',
    city: '',
    country: '',
    pinCode: '',
  };

  lab: LabRegistrationRequest = new LabRegistrationRequest();

  constructor(
    private _labService: LabServiceService,
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private _route:Router
  ) {}

  ngOnInit() {
    this.loginService.getCurrentUser().subscribe((data: any) => {
      console.log(data);
      this.lab = data;
      this.lab.phone = ' ';
      this.lab.email = data.email;
      this.lab.labName = data.name;
      this.lab.password = data.password;
      this.lab.biography = '';
      this.lab.labDocuments = [];
      this.lab.userId = data.id;

      // Use location1 instead of initializing lab.location here
      this.lab.location = {
        id: 0,
        addressLine: '',
        area: '',
        city: '',
        country: '',
        pinCode: '',
      };

      // Initialize form after getting user data
      this.initializeForm();
    });
  }

  initializeForm() {
    this.labForm = this.formBuilder.group({
      labName: [
        '',
        [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)],
      ],
      email: ['', [Validators.required, Validators.email]],
      phone: [
        '',
        [Validators.required, Validators.pattern(/^\d{10}$/)],
      ],
      area: [
        '',
         [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)],
       ],
       addressLine: [
         '',
         Validators.required,
       ],
       city: [
         '',
         [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)],
       ],
       country: [
       '',
         [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)],
       ],
       pinCode: [
        '',
         [Validators.required, Validators.pattern(/^\d{6}$/)],
       ],

      biography: ['', Validators.required],
      labDocuments: ["", Validators.required],
    });
  }

  get labName() {
    return this.labForm.get('labName');
  }

  get phone() {
    return this.labForm.get('phone');
  }

  onSubmit() {
    // Update lab.location with the values from the form
  //  this.lab.location = this.labForm.value.location;
    this.saveLab();
  }

  saveLab() {
    this._labService.SaveLab(this.lab).subscribe(
      (data: any) => {
        console.log(data);
        Swal.fire(data.message, '', 'success');
        this._route.navigate(["/notvarified"]);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  onUploadFiles(event: any, type: number): void {
    if (type === 1) {
      let files: File[] = event.target.files;
      this.lab.labDocuments.push(event.target.files[0]);
    } else if (type === 2) {
      this.lab.labDocuments[0] = event.target.files[0];
    }
  }
}
