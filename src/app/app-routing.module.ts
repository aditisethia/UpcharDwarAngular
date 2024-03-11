import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminAppointmentsComponent } from './Roles/Admin/admin-appointments/admin-appointments.component';
import { AdminDashboardHomeComponent } from './Roles/Admin/admin-dashboard-home/admin-dashboard-home.component';
import { AdminDashboardComponent } from './Roles/Admin/admin-dashboard/admin-dashboard.component';
import { AdminDoctorlistComponent } from './Roles/Admin/admin-doctorlist/admin-doctorlist.component';
import { AdminPatientlistComponent } from './Roles/Admin/admin-patientlist/admin-patientlist.component';
import { AdminProfileComponent } from './Roles/Admin/admin-profile/admin-profile.component';
import { AdminReviewComponent } from './Roles/Admin/admin-review/admin-review.component';
import { AdminSettingsComponent } from './Roles/Admin/admin-settings/admin-settings.component';
import { AdminSpecialitiesComponent } from './Roles/Admin/admin-specialities/admin-specialities.component';
import { AdminTransactionsComponent } from './Roles/Admin/admin-transactions/admin-transactions.component';
import { DoctorAllpatientComponent } from './Roles/Doctor/doctor-allpatient/doctor-allpatient.component';
import { DoctorAppointmentsComponent } from './Roles/Doctor/doctor-appointments/doctor-appointments.component';
import { DoctorChangepasswordComponent } from './Roles/Doctor/doctor-changepassword/doctor-changepassword.component';
import { DoctorDashboardDataComponent } from './Roles/Doctor/doctor-dashboard-data/doctor-dashboard-data.component';
import { DoctorDashboardComponent } from './Roles/Doctor/doctor-dashboard/doctor-dashboard.component';
import { DoctorInvoicesComponent } from './Roles/Doctor/doctor-invoices/doctor-invoices.component';
import { DoctorProfilesettingComponent } from './Roles/Doctor/doctor-profilesetting/doctor-profilesetting.component';
import { DoctorScheduleTimingsComponent } from './Roles/Doctor/doctor-schedule-timings/doctor-schedule-timings.component';
import { CreateLabtestComponent } from './Roles/lab/create-labtest/create-labtest.component';
import { EditLabtestComponent } from './Roles/lab/edit-labtest/edit-labtest.component';
import { LabAllpatientComponent } from './Roles/lab/lab-allpatient/lab-allpatient.component';
import { LabChangepasswordComponent } from './Roles/lab/lab-changepassword/lab-changepassword.component';
import { LabDashboardDataComponent } from './Roles/lab/lab-dashboard-data/lab-dashboard-data.component';
import { LabDashboardComponent } from './Roles/lab/lab-dashboard/lab-dashboard.component';
import { LabInvoicesDetailsComponent } from './Roles/lab/lab-invoices-details/lab-invoices-details.component';
import { LabProfileSettingComponent } from './Roles/lab/lab-profile-setting/lab-profile-setting.component';
import { LabRequestClientComponent } from './Roles/lab/lab-request-client/lab-request-client.component';
import { LabReviewratingComponent } from './Roles/lab/lab-reviewrating/lab-reviewrating.component';

import { CheckoutComponent } from './Roles/patient/checkout/checkout.component';
import { PatientChangePasswordComponent } from './Roles/patient/patient-change-password/patient-change-password.component';
import { PatientDashboardHomeComponent } from './Roles/patient/patient-dashboard-home/patient-dashboard-home.component';
import { PatientDashboardComponent } from './Roles/patient/patient-dashboard/patient-dashboard.component';
import { PatientDoctorAppointmentBookingComponent } from './Roles/patient/patient-doctor-appointment-booking/patient-doctor-appointment-booking.component';
import { PatientDoctorBookingSuccessComponent } from './Roles/patient/patient-doctor-booking-success/patient-doctor-booking-success.component';
import { DoctorProfileComponent } from './Roles/patient/patient-doctor-profile/doctor-profile.component';
import { PatientFavrouiteDoctorComponent } from './Roles/patient/patient-favrouite-doctor/patient-favrouite-doctor.component';
import { PatientMainDashboardComponent } from './Roles/patient/patient-main-dashboard/patient-main-dashboard.component';
import { PatientProfileSettingComponent } from './Roles/patient/patient-profile-setting/patient-profile-setting.component';
import { SearchDoctorComponent } from './Roles/patient/search-doctor/search-doctor.component';

import { PharmacyAdminDashboardDataComponent } from './Roles/pharmacy/pharmacy-admin/pharmacy-admin-dashboard-data/pharmacy-admin-dashboard-data.component';
import { PharmacyAdminDashboardComponent } from './Roles/pharmacy/pharmacy-admin/pharmacy-admin-dashboard/pharmacy-admin-dashboard.component';
import { PharmacyAdminManagemedicinesComponent } from './Roles/pharmacy/pharmacy-admin/pharmacy-admin-managemedicines/pharmacy-admin-managemedicines.component';
import { PharmacyAdminOrdersComponent } from './Roles/pharmacy/pharmacy-admin/pharmacy-admin-orders/pharmacy-admin-orders.component';
import { PharmacyAdminSalesComponent } from './Roles/pharmacy/pharmacy-admin/pharmacy-admin-sales/pharmacy-admin-sales.component';
import { PharmacyAdminSettingProfileComponent } from './Roles/pharmacy/pharmacy-admin/pharmacy-admin-setting-profile/pharmacy-admin-setting-profile.component';
import { PharmacyDashboardComponent } from './Roles/pharmacy/pharmacy-dashboard/pharmacy-dashboard.component';
import { PharmacyDetailsComponent } from './Roles/pharmacy/pharmacy-details/pharmacy-details.component';
import { PharmacyOrdersComponent } from './Roles/pharmacy/pharmacy-orders/pharmacy-orders.component';
import { PharmacyUploadPrescriptionComponent } from './Roles/pharmacy/pharmacy-upload-prescription/pharmacy-upload-prescription.component';
import { LoginComponent } from './common/pages/login/login.component';
import { OtpValidationComponent } from './common/pages/otp-validation/otp-validation.component';
import { DoctorRegistrationFormComponent } from './common/pages/registrations/doctor-registration-form/doctor-registration-form.component';
import { PatientRegistrationComponent } from './common/pages/registrations/patient-registration/patient-registration.component';
import { RegisterComponent } from './common/pages/registrations/register/register.component';
import { LabRegistrationComponent } from './common/pages/registrations/lab-registration/lab-registration.component';
import { MySchedulesComponent } from './Roles/Doctor/my-schedules/my-schedules.component';
import { PatientLabsListComponent } from './Roles/patient/patient-labs-list/patient-labs-list.component';
import { ListLabTestComponent } from './Roles/lab/list-lab-test/list-lab-test.component';
import { PatientLabTestListComponent } from './Roles/patient/patient-lab-test-list/patient-lab-test-list.component';
import { LabCheckoutComponent } from './Roles/patient/lab-checkout/lab-checkout.component';
import { PatientFavoriteLabsComponent } from './Roles/patient/patient-favorite-labs/patient-favorite-labs.component';
import { OtpForForgetpasswordComponent } from './common/pages/otp-for-forgetpassword/otp-for-forgetpassword.component';
import { ForgetChangepasswordComponent } from './common/pages/forget-changepassword/forget-changepassword.component';
import { ForgetVarificationComponent } from './common/pages/forget-varification/forget-varification.component';

import { ChattingComponent } from './Roles/Conversation/chatting/chatting.component';
import { ChatComponent } from './Roles/Conversation/chat/chat.component';

import { LabInvoicesComponent } from './Roles/lab/lab-invoices/lab-invoices.component';
import { LabProfileComponent } from './Roles/patient/lab-profile/lab-profile.component';
import { NotVarifiedComponent } from './common/pages/not-varified/not-varified.component';
import { PatientGuard } from './helper/patient-gaurd.gaurd';
import { doctorguard } from './helper/doctor-gaurd.gaurd';




const routes: Routes = [
  {
    path:"labprofile/:id",
    component:LabProfileComponent
  },
  {
    path:"labTestList/:id",
    component:PatientLabTestListComponent,
  },

  {
    path:"doctorprofile/:drid",
    component:DoctorProfileComponent,
  },
  {
    path: "",
    component: HomeComponent
  },
  {
   path:"notvarified",
   component:NotVarifiedComponent,
  },

  {

    path:"patientregister",
    component: PatientRegistrationComponent,
  },
  {
    path: "otp",
    component:OtpValidationComponent,
  },
    {
      path: "otpforgetpassword",
      component:OtpForForgetpasswordComponent
    },
    {
      path:"forgetchangepassword",
      component:ForgetChangepasswordComponent
    },

    {
      path:"verify-otp-for-forget-password",
      component:ForgetVarificationComponent
    },
  {
    path:"login",
    component:LoginComponent,
  },
  {
    path:"register",
    component: RegisterComponent,
  },

  {
    path:"labregister",
    component:LabRegistrationComponent
  },

  {
   path:"admindashboard",
   component:AdminDashboardComponent,

    children: [

      {
        // path:"admindashboardhome",
        path: "",
        component: AdminDashboardHomeComponent
      },
      {
        path: "adminappointments",
        component: AdminAppointmentsComponent
      },
      {

        path: "adminspecialities",
        component: AdminSpecialitiesComponent
      },
      {
        path: "admindoctorlist",
        component: AdminDoctorlistComponent
      },
      {
        path: "adminpatientlist",
        component: AdminPatientlistComponent
      },
      {
        path: "adminreview",
        component: AdminReviewComponent
      },
      {
        path: "adminntransactions",
        component: AdminTransactionsComponent
      },
      {
        path: "adminsettings",
        component: AdminSettingsComponent
      },
      {
        path: "adminprofile",
        component: AdminProfileComponent
      }
    ]
  },
  {

    path: "doctorregistration",
    component: DoctorRegistrationFormComponent
  },

  {
    path: "doctordashboard",
    component: DoctorDashboardComponent,
    canActivate: [doctorguard],
    children: [
      {
        path: "",
        component: DoctorDashboardDataComponent
      },
      {
        path: "doctorappointments",
        component: DoctorAppointmentsComponent
      },
      {
        path: "myschedules",
        component: MySchedulesComponent
      },
      {
        path: "doctorallpatients",
        component: DoctorAllpatientComponent
      },
      {
        path: "doctorscheduletimings",
        component: DoctorScheduleTimingsComponent
      },
      {
        path: "doctorinvoices",
        component: DoctorInvoicesComponent

      },
      {
        path: "doctorprofilesetting",
        component: DoctorProfilesettingComponent
      },
      {
        path: "doctorchangepassword",
        component: DoctorChangepasswordComponent
      }
    ]
  },

  {
    path:"searchdoctor",
    component:SearchDoctorComponent,
  },




  { path: "doctordashboard",
   component: DoctorDashboardComponent,
   canActivate: [doctorguard],
   children:[
    {
      path:"",
      component:DoctorDashboardDataComponent
    },

    {
      path:"message",
      component:ChattingComponent
    },
    {
      path:"doctorappointments",
      component:DoctorAppointmentsComponent
    },
    {
      path:"doctorallpatients",
      component:DoctorAllpatientComponent
    },
    {
      path:"doctorscheduletimings",
      component:DoctorScheduleTimingsComponent
    },
    {
      path:"doctorinvoices",
      component:DoctorInvoicesComponent

    },
    {
      path:"doctorprofilesetting",
      component:DoctorProfilesettingComponent
    },
    {
      path:"doctorchangepassword",
      component:DoctorChangepasswordComponent,
    }
   ]
  },
  { path: "patientmaindashboard",
  component: PatientMainDashboardComponent,
  canActivate: [PatientGuard],
  children:[
    {
      path:"lablist",
      component:PatientLabsListComponent
    },
    {
      path:"message",
      component:ChattingComponent
    }
    ,



    {
      path:"favlab",
      component:PatientFavoriteLabsComponent
    },


    {
      path:"labcheckout",
      component:LabCheckoutComponent
    },
   {
     path:"",
     component:PatientDashboardHomeComponent,
   },
   {
    path:"patientdashboard",
    component:PatientDashboardComponent,
   },

  {
    path:"doctorappointmentbooking/:drid",
    component:PatientDoctorAppointmentBookingComponent,
    pathMatch:'full'
  },
  {
    path:"searchdoctor",
    component:SearchDoctorComponent,
  },
  {
    path:"checkout",
    component:CheckoutComponent,
  },
  {
    path:"bookingsuccess",
    component:PatientDoctorBookingSuccessComponent,
  },
  {
    path:"patientprofilesetting",
    component:PatientProfileSettingComponent,
  },
  {
    path:"changepassword",
    component:PatientChangePasswordComponent,
  },
  {
    path:"favrouitedoctor",
    component:PatientFavrouiteDoctorComponent,
  },


]
  },
{
  path: "labdashboard",
   component: LabDashboardComponent,
   children:[
    {
      path:"labdatadashboard",
      component:LabDashboardDataComponent,
    },
    {
      path:"labinvoices",
      component:LabInvoicesComponent,

    },

    {
      path:"patientrequestforlabtest",
      component:LabRequestClientComponent,
    },
    {
      path:"invoicedetails",
      component:LabInvoicesDetailsComponent,
    },
    {
      path:"profilesetting",
      component:LabProfileSettingComponent,
    },
    {
      path:"changepassword",
      component:LabChangepasswordComponent,
    },
    {
      path:"allpatient",
      component:LabAllpatientComponent,
    },
    {
      path:"labreviewrating",
      component:LabReviewratingComponent,
    },
    {
       path:"createlabTest",
       component:CreateLabtestComponent,
    },
    {
      path:"editlabTest/:id",
      component:EditLabtestComponent,
    },
    {
      path:"labslist",
      component:ListLabTestComponent
    }
   ]
  },

  {
    path: "patientdashboard",
    component: PatientDashboardComponent,
    children: [
      {
        path: "",
        component: PatientDashboardHomeComponent,
      },
    ]
  },


  {
    path: 'pharmacydashboard',
    component: PharmacyDashboardComponent
  },
  {
    path: 'pharmacydetails',
    component: PharmacyDetailsComponent,

  },
  {
    path: 'uploadprescription',
    component: PharmacyUploadPrescriptionComponent,

  },
  {
    path: 'pharmacyorders',
    component: PharmacyOrdersComponent,

  },
  {
    path: 'pharmaadmindashboard',
    component: PharmacyAdminDashboardComponent,
    children: [
      {
        path: "",
        component: PharmacyAdminDashboardDataComponent
      },
      {
        path: "pharmaadminorders",
        component: PharmacyAdminOrdersComponent
      },
      {
        path: "maangemedicines",
        component: PharmacyAdminManagemedicinesComponent
      },
      {
        path: "pharmasales",
        component: PharmacyAdminSalesComponent
      },
      {
        path: "profilesetting",
        component: PharmacyAdminSettingProfileComponent
      }
    ]

  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
