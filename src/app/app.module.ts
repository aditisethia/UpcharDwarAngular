
import { NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { HomeBannerComponent } from './home/layouts/home-banner/home-banner.component';
import { HomeNavbarComponent } from './home/layouts/home-navbar/home-navbar.component';
import { HomePopularSectionComponent } from './home/layouts/home-popular-section/home-popular-section.component';
import { HomeSpecialitiesComponent } from './home/layouts/home-specialities/home-specialities.component';
import {CloudinaryModule} from '@cloudinary/ng';


import { HttpClientModule } from '@angular/common/http';
import { MatRadioModule } from '@angular/material/radio';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
  provideAnimations,
} from '@angular/platform-browser/animations';
import { LoginComponent } from './common/pages/login/login.component';
import { OtpValidationComponent } from './common/pages/otp-validation/otp-validation.component';

import { authInterceptorProviders } from './Interceptors/authentication.interceptor';

import { MatButtonModule } from '@angular/material/button';
import { NgApexchartsModule } from 'ng-apexcharts';

import { PharmacyAdminDashboardComponent } from './Roles/pharmacy/pharmacy-admin/pharmacy-admin-dashboard/pharmacy-admin-dashboard.component';
import { PharmacyAdminSidebarComponent } from './Roles/pharmacy/pharmacy-admin/pharmacy-admin-sidebar/pharmacy-admin-sidebar.component';
import { PharmacyDashboardComponent } from './Roles/pharmacy/pharmacy-dashboard/pharmacy-dashboard.component';
import { PharmacyDetailsComponent } from './Roles/pharmacy/pharmacy-details/pharmacy-details.component';
import { PharmacyOrdersComponent } from './Roles/pharmacy/pharmacy-orders/pharmacy-orders.component';
import { PharmacyUploadPrescriptionComponent } from './Roles/pharmacy/pharmacy-upload-prescription/pharmacy-upload-prescription.component';
import { FooterComponent } from './home/layouts/footer/footer.component';
import { PharmacyAdminDashboardDataComponent } from './Roles/pharmacy/pharmacy-admin/pharmacy-admin-dashboard-data/pharmacy-admin-dashboard-data.component';
import { PharmacyAdminOrdersComponent } from './Roles/pharmacy/pharmacy-admin/pharmacy-admin-orders/pharmacy-admin-orders.component';
import { PharmacyAdminManagemedicinesComponent } from './Roles/pharmacy/pharmacy-admin/pharmacy-admin-managemedicines/pharmacy-admin-managemedicines.component';
import { PharmacyAdminSalesComponent } from './Roles/pharmacy/pharmacy-admin/pharmacy-admin-sales/pharmacy-admin-sales.component';
import { PharmacyAdminSettingProfileComponent } from './Roles/pharmacy/pharmacy-admin/pharmacy-admin-setting-profile/pharmacy-admin-setting-profile.component';
import { DoctorRegistrationFormComponent } from './common/pages/registrations/doctor-registration-form/doctor-registration-form.component';

import { AdminDashboardComponent } from './Roles/Admin/admin-dashboard/admin-dashboard.component';
import { AdminSidebarComponent } from './Roles/Admin/admin-sidebar/admin-sidebar.component';
import { AdminNavbarComponent } from './Roles/Admin/admin-navbar/admin-navbar.component';
import { AdminDashboardHomeComponent } from './Roles/Admin/admin-dashboard-home/admin-dashboard-home.component';
import { AdminAppointmentsComponent } from './Roles/Admin/admin-appointments/admin-appointments.component';
import { AdminDoctorlistComponent } from './Roles/Admin/admin-doctorlist/admin-doctorlist.component';
import { AdminPatientlistComponent } from './Roles/Admin/admin-patientlist/admin-patientlist.component';
import { AdminProfileComponent } from './Roles/Admin/admin-profile/admin-profile.component';
import { AdminReviewComponent } from './Roles/Admin/admin-review/admin-review.component';
import { AdminSettingsComponent } from './Roles/Admin/admin-settings/admin-settings.component';
import { AdminSpecialitiesComponent } from './Roles/Admin/admin-specialities/admin-specialities.component';
import { AdminTransactionsComponent } from './Roles/Admin/admin-transactions/admin-transactions.component';
import { CreateLabtestComponent } from './Roles/lab/create-labtest/create-labtest.component';
import { EditLabtestComponent } from './Roles/lab/edit-labtest/edit-labtest.component';
import { LabAllpatientComponent } from './Roles/lab/lab-allpatient/lab-allpatient.component';
import { LabBannerComponent } from './Roles/lab/lab-banner/lab-banner.component';
import { LabChangepasswordComponent } from './Roles/lab/lab-changepassword/lab-changepassword.component';
import { LabDashboardDataComponent } from './Roles/lab/lab-dashboard-data/lab-dashboard-data.component';
import { LabDashboardComponent } from './Roles/lab/lab-dashboard/lab-dashboard.component';
import { LabInvoicesDetailsComponent } from './Roles/lab/lab-invoices-details/lab-invoices-details.component';
import { LabProfileSettingComponent } from './Roles/lab/lab-profile-setting/lab-profile-setting.component';
import { LabProfileSidebarComponent } from './Roles/lab/lab-profile-sidebar/lab-profile-sidebar.component';
import { LabRequestClientComponent } from './Roles/lab/lab-request-client/lab-request-client.component';
import { LabReviewratingComponent } from './Roles/lab/lab-reviewrating/lab-reviewrating.component';


import { CheckoutComponent } from './Roles/patient/checkout/checkout.component';

import { LabForpatientComponent } from './Roles/patient/lab-forpatient/lab-forpatient.component';

import { PatientAppointmentComponent } from './Roles/patient/patient-appointment/patient-appointment.component';
import { PatientChangePasswordComponent } from './Roles/patient/patient-change-password/patient-change-password.component';
import { PatientDashboardHomeComponent } from './Roles/patient/patient-dashboard-home/patient-dashboard-home.component';
import { PatientDashboardComponent } from './Roles/patient/patient-dashboard/patient-dashboard.component';
import { PatientDoctorAppointmentBookingComponent } from './Roles/patient/patient-doctor-appointment-booking/patient-doctor-appointment-booking.component';
import { PatientDoctorBookingSuccessComponent } from './Roles/patient/patient-doctor-booking-success/patient-doctor-booking-success.component';
import { DoctorProfileComponent } from './Roles/patient/patient-doctor-profile/doctor-profile.component';
import { PatientFavrouiteDoctorComponent } from './Roles/patient/patient-favrouite-doctor/patient-favrouite-doctor.component';
import { PatientMainDashboardComponent } from './Roles/patient/patient-main-dashboard/patient-main-dashboard.component';
import { PatientProfileSettingComponent } from './Roles/patient/patient-profile-setting/patient-profile-setting.component';
import { PatientSidebarComponent } from './Roles/patient/patient-sidebar/patient-sidebar.component';
import { SearchDoctorBreadCrumComponent } from './Roles/patient/search-doctor-bread-crum/search-doctor-bread-crum.component';
import { SearchDoctorComponent } from './Roles/patient/search-doctor/search-doctor.component';


import { PatientRegistrationComponent } from './common/pages/registrations/patient-registration/patient-registration.component';
import { RegisterComponent } from './common/pages/registrations/register/register.component';
import { DoctorAllpatientComponent } from './Roles/Doctor/doctor-allpatient/doctor-allpatient.component';
import { DoctorAppointmentsComponent } from './Roles/Doctor/doctor-appointments/doctor-appointments.component';
import { DoctorBreadcrumbComponent } from './Roles/Doctor/doctor-breadcrumb/doctor-breadcrumb.component';
import { DoctorChangepasswordComponent } from './Roles/Doctor/doctor-changepassword/doctor-changepassword.component';
import { DoctorDashboardDataComponent } from './Roles/Doctor/doctor-dashboard-data/doctor-dashboard-data.component';
import { DoctorDashboardComponent } from './Roles/Doctor/doctor-dashboard/doctor-dashboard.component';
import { DoctorInvoicesComponent } from './Roles/Doctor/doctor-invoices/doctor-invoices.component';
import { DoctorProfileSidebarComponent } from './Roles/Doctor/doctor-profile-sidebar/doctor-profile-sidebar.component';
import { DoctorProfilesettingComponent } from './Roles/Doctor/doctor-profilesetting/doctor-profilesetting.component';
import { DoctorScheduleTimingsComponent } from './Roles/Doctor/doctor-schedule-timings/doctor-schedule-timings.component';
import { MatCardModule } from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import {MatPaginatorModule} from '@angular/material/paginator';
import {MatChipsModule} from '@angular/material/chips';
import { DatePipe } from '@angular/common';
import { LabRegistrationComponent } from './common/pages/registrations/lab-registration/lab-registration.component';
import { MySchedulesComponent } from './Roles/Doctor/my-schedules/my-schedules.component';
import { PatientLabsListComponent } from './Roles/patient/patient-labs-list/patient-labs-list.component';
import { ListLabTestComponent } from './Roles/lab/list-lab-test/list-lab-test.component';
import { PatientLabTestListComponent } from './Roles/patient/patient-lab-test-list/patient-lab-test-list.component';
import { LabCheckoutComponent } from './Roles/patient/lab-checkout/lab-checkout.component';
import { PatientFavoriteLabsComponent } from './Roles/patient/patient-favorite-labs/patient-favorite-labs.component';
import { NgOtpInputModule } from 'ng-otp-input';
import { OtpForForgetpasswordComponent } from './common/pages/otp-for-forgetpassword/otp-for-forgetpassword.component';
import { ForgetChangepasswordComponent } from './common/pages/forget-changepassword/forget-changepassword.component';
import { ForgetVarificationComponent } from './common/pages/forget-varification/forget-varification.component';
import { ChattingComponent } from './Roles/Conversation/chatting/chatting.component';
import { ChatComponent } from './Roles/Conversation/chat/chat.component';


@NgModule({
  declarations: [
    ListLabTestComponent,
    AppComponent,
    HomeComponent,
    HomeNavbarComponent,
    HomeSpecialitiesComponent,
    HomeBannerComponent,
    HomePopularSectionComponent,
    FooterComponent,
    DoctorDashboardComponent,
    DoctorBreadcrumbComponent,
    DoctorProfileSidebarComponent,
    DoctorDashboardDataComponent,
    DoctorAppointmentsComponent,
    DoctorAllpatientComponent,
    DoctorScheduleTimingsComponent,
    DoctorInvoicesComponent,
    DoctorProfilesettingComponent,
    DoctorChangepasswordComponent,
    AdminDashboardComponent,
    AdminSidebarComponent,
    AdminNavbarComponent,
    AdminDashboardHomeComponent,
    AdminAppointmentsComponent,
    AdminSpecialitiesComponent,
    AdminDoctorlistComponent,
    AdminPatientlistComponent,
    AdminReviewComponent,
    AdminTransactionsComponent,
    AdminSettingsComponent,
    AdminProfileComponent,
    PatientDashboardComponent,
    PatientDashboardHomeComponent,
    PatientSidebarComponent,
    PatientAppointmentComponent,
    SearchDoctorComponent,
    SearchDoctorBreadCrumComponent,
    DoctorProfileComponent,
    PatientDoctorAppointmentBookingComponent,
    PatientMainDashboardComponent,
    CheckoutComponent,
    PatientDoctorBookingSuccessComponent,
    PatientProfileSettingComponent,
    PatientChangePasswordComponent,
    PatientFavrouiteDoctorComponent,
    LabDashboardComponent,
    LabDashboardDataComponent,
    LabChangepasswordComponent,
    LabBannerComponent,

    LabProfileSidebarComponent,
    LabRequestClientComponent,
    LabInvoicesDetailsComponent,
    LabProfileSettingComponent,
    LabAllpatientComponent,
    LabReviewratingComponent,
    EditLabtestComponent,
    CreateLabtestComponent,
    LabForpatientComponent,
    LoginComponent,
    RegisterComponent,
    OtpValidationComponent,
    PatientRegistrationComponent,
    PharmacyDashboardComponent,
    PharmacyDetailsComponent,
    PharmacyUploadPrescriptionComponent,
    PharmacyOrdersComponent,
    PharmacyAdminDashboardComponent,
    PharmacyAdminSidebarComponent,
    PharmacyAdminDashboardDataComponent,
    PharmacyAdminOrdersComponent,
    PharmacyAdminManagemedicinesComponent,
    PharmacyAdminSalesComponent,
    PharmacyAdminSettingProfileComponent,
    DoctorRegistrationFormComponent,
    LoginComponent,
    LabRegistrationComponent,
    MySchedulesComponent,
    PatientLabsListComponent,
    PatientLabTestListComponent,
    LabCheckoutComponent,

    PatientFavoriteLabsComponent,
      OtpForForgetpasswordComponent,
      ForgetChangepasswordComponent,
      ForgetVarificationComponent,
      ChattingComponent,
      ChatComponent







  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatCardModule,
    NgApexchartsModule,
    MatRadioModule,
    HttpClientModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    FormsModule,
    MatButtonModule,
    NgApexchartsModule,
    MatDatepickerModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatChipsModule,
    DatePipe,
    MatCardModule,
    NgOtpInputModule,
    MatSnackBarModule,
    CloudinaryModule,


  ],
  providers: [
    provideAnimations(),
    importProvidersFrom([BrowserModule, BrowserAnimationsModule]),
    authInterceptorProviders,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
