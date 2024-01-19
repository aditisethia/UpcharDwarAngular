import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-sidebar',
  templateUrl: './patient-sidebar.component.html',
  styleUrls: ['./patient-sidebar.component.css']
})
export class PatientSidebarComponent {

  constructor(private  router: Router){}

  logout(): void {
    // Clear local storage
    localStorage.clear();
    this.router.navigate(['/'])
    window.location.reload();

  }



}
