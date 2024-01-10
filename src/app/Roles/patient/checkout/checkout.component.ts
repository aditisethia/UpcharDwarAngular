import { Component, OnInit } from '@angular/core';
import { PatientDoctorAppointmentBookingComponent } from '../patient-doctor-appointment-booking/patient-doctor-appointment-booking.component';
import { Appointment_Request } from 'src/app/payload/Request/Appointment_Request ';
import { AppointmentserviceService } from 'src/app/services/doctor-service/appointmentservice.service';
import { DoctorserviceService } from 'src/app/services/doctor-service/doctorservice.service';
import { RazorpayService } from 'src/app/services/razorpay/razorpay.service';
declare var Razorpay: any;


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  appointmentData: Appointment_Request = new Appointment_Request();


  order = {
      // Replace with your actual amount
    currency: 'INR',  // Replace with your actual currency
    id: String  // Replace with your actual order ID
  };
  constructor(private razorpayService: RazorpayService, private appointmentService: AppointmentserviceService, private doctorService: DoctorserviceService) { }
  IMG_URLs = this.doctorService.IMAGE_URL;







  makePayment(): void {
    console.log("hello at makepayment");

    const amount = (60 + this.appointmentData.doctor.rate) * 100; // Set your desired amount
    this.razorpayService.createOrder(amount).subscribe((order: any) => {
      console.log("order-->>>>>"+order);
      console.log(order);
      this.order.id=order.id;

console.log("fuckinng id---->>>>>>"+this.order.id);

      const options = {
        key: 'rzp_test_EobRbpOb7mfGav', // Add the key_id property
        amount: amount,
        currency: order.currency,
        name: 'UpcharDwar',
        description: 'Payment for services',
        order_id: order.id,
        handler: (response: any) => {
          console.log("at make payment deep");
          console.log("orderid--->>>>>>>>>>");
          this.capturePayment(response.razorpay_payment_id, order.id);
        },
        theme: {
          color: '#0c238a'
        },
        method: {
          UPI: true,
        },
        prefill: {
          name: this.appointmentData.patient.name,
          email: this.appointmentData.patient.email,
          contact: this.appointmentData.patient.mobile
        },
        notes: {
          address: this.appointmentData.patient.city
        }
      };

      const razorpay = new Razorpay(options);
      console.log("rozarpay ->>>>> ", razorpay);
      razorpay.open();

    }, (error: any) => {

      console.log(error);

    });
  }

  capturePayment(paymentId: string, orderId: string): void {
    this.razorpayService.capturePayment(paymentId, orderId).subscribe((response: any) => {
      console.log('Payment captured successfully:', response);
      // Handle success or failure
    });
    return
  }








  ngOnInit(): void {



    this.appointmentService.appointmentData$.subscribe((data: any) => {
      this.appointmentData = data;
      console.log(this.appointmentData);

    });
  }






  userData: any = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    cardName: '',
    cardNumber: '',
    expiryMonth: '',
    expiryYear: '',
    cvv: '',
    paymentMethod: 'creditCard', // Default payment method
    termsAccept: false,
  };



  onSubmit() {
    // Handle form submission logic here
    console.log(this.userData);
  }


}
