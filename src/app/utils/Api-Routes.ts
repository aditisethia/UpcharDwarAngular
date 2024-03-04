export class ApiRoutes{
    
    private static BASE_URL="http://localhost:8080/upchardwar"
    public static  IMAGE_URL = 'http://localhost:8080/api/getImageApi/';


    public static GET_MESSAGEBY_USERS_IDS = this.BASE_URL+'/chat/messages';
    public static AUTH_LOGIN = this.BASE_URL+'/auth/login';
    public static CURRENT_USER = this.BASE_URL+'/auth/current-user';
    public static GENERATE_OTP=this.BASE_URL+'/auth/generate-otp';
    public static CHANGE_PASSWORD=this.BASE_URL+'/auth/change-password';
    public static RESET_PASSWORD=this.BASE_URL+'/forgetpassword/reset';
    public static FORGET_PASS_VERIFY=this.BASE_URL+'/forgetpassword/verify';
    public static FORGET_PASS_GENERATE_OTP=this.BASE_URL+'/forgetpassword/generate-otp';
    public static VERIFY_OTP=this.BASE_URL+'/auth/verify';
    public static GET_DR_BY_USER_ID = this.BASE_URL+'/doctor/userid/';
    public static GENERATE_TIME_SLOTE_SCHEDULE=this.BASE_URL+'/schedule/create';
    public static GET_SCHEDULE_BY_DR_ID=this.BASE_URL+'/schedule/doctor/';
    public static DELETE_SCHEDULE_BY_ID=this.BASE_URL+'/schedule/';
    public static CREATE_ORDER=this.BASE_URL+'/timeslote/create-order';
    public static CAPTATURE_PAYMENT=this.BASE_URL+'/timeslote/capture-payment';
    public static GET_PATIENT_BY_EMAIL=this.BASE_URL+'/patient/by-email/';
    public static GET_ALL_APPOINTMENT_OF_PATIENT=this.BASE_URL+'/appointment/all/patient/';
    public static UPLOAD=this.BASE_URL+'/patient/save1';
    public static CREATE_TRANSACTION=this.BASE_URL+'/labBooking/createTransaction/';
    public static CREATE_LAB_TEST=this.BASE_URL+'/labTest/save';
    public static GET_LAB_BY_USER_ID=this.BASE_URL+'/lab/user/';
    public static DELETE_LAB_TEST=this.BASE_URL+'/labTest/delete/';
    public static UPDATE_LAB=this.BASE_URL+'/labTest/update/';
    public static GET_LAB_TEST_BY_ID=this.BASE_URL+'/labTest/get/';
    public static ALL_FAVORITE_LAB=this.BASE_URL+'/lab/favorites/';
    public static ADD_BOOK=this.BASE_URL+'/labBooking/';
    public static GET_INVOICE_BY_DR_ID=this.BASE_URL+'/invoice/get/doctor/';
    public static BOOKING_TIME_SLOTS=this.BASE_URL+'/timeslote/update/isbooked/';
    public static GET_TIMESLOT_BU_USER_ID=this.BASE_URL+'/timeslote/get/';
    public static CREATE_INVOICE=this.BASE_URL+'/invoice/create';
    public static GET_ALL_SPECIALITY=this.BASE_URL+'/speciality/all';
    public static GET_ALL_PATIENT = this.BASE_URL+'/appointment/countPatient';
    public static GET_TODAY_TOTAL_PATIENT=this.BASE_URL+'/appointment/countTodaysPetient';
    public static GET_TOTAL_UPCOMING_APPOINTMENT =this.BASE_URL+'/appointment/countUpcomingAppointments';
    public static GET_UPCOMING_APPOINTMENT=this.BASE_URL+'/appointment/upcomingAppointments';
    public static CANCLE_APPOINTMENT=this.BASE_URL+'/appointment/cancelAppointment/';
    public static GET_TODAY_APPOINTMENT=this.BASE_URL+'/appointment/todaysAppointments';
    public static GET_DR_BY_DR_ID=this.BASE_URL+'/doctor/';
    public static DOWNLOAD=this.BASE_URL+'/file/download/';
    public static GET_TODAY_APPOINTMENT_OF_DR=this.BASE_URL+'/appointment/doctor/today/';
    public static GET_DR_APPOINTMENT=this.BASE_URL+'/appointment/doctor/';
    public static GET_ALL_APPOINTMENT=this.BASE_URL+'/appointments/search/';
    public static ADD_APPOINTMENT=this.BASE_URL+'/appointment/book';
    public static GET_ALL_APPOINTMENT_OF_DR=this.BASE_URL+'/appointment/all/';
    public static GET_APPOINTMENT_OF_PATIENT_ID=this.BASE_URL+'/appointment/patient/';
    public static GET_PATIENT_BY_USER_GMAIL= this.BASE_URL+'/patient/by-email/';
    public static GET_ALL_USERS_FROM_USER_TABLE =this.BASE_URL+'/user/getall';

    public static GENERATE_LAB_INVOICE=this.BASE_URL+'/invoice/lab/create';
    public static GET_INVOICE_BY_LAB_ID=this.BASE_URL+'/invoice/get/lab/';
    public  static GET_LABREVIEW_BY_Lab_ID= this.BASE_URL+'/labreviewrating/lab/';
    public  static ADD_LAB_REVIEW=this.BASE_URL+'/labreviewrating/';
    public static ADD_LAB_REPLY=this.BASE_URL+'/labreviewrating/reply';
    public static DELETE_REVIEW_OF_LAB=this.BASE_URL+'/labreviewrating/';
  public static DELETE_REPLAY_OF_REVIEW=this.BASE_URL+'/labreviewrating/';
 public static GET_BOOKING_OF_LAB=this.BASE_URL+'/labBooking/lab/today/';
  static CHANGE_LAB_BOOKING_STATUS=this.BASE_URL;
  static TOTAL_BOOKING_OF_LAB =this.BASE_URL+'/labBooking/totalBookig/';
  static COUNT_OF_TODAYS_BOOKINGS=this.BASE_URL+'/labBooking/todaysTotalBookings/';
  static COUNT_SUCCESSFUL_SERVICE_OF_LAB = this.BASE_URL+'/labBooking/success/';
  static GET_ALL_BOOKING_OF_PATIENT=this.BASE_URL+'/labBooking/patientTotalBooking/';
 public static RESEND_OTP=this.BASE_URL+'/auth/resend';
}

