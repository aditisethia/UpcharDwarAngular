import { Component, OnInit } from '@angular/core';
import { PatientDoctorAppointmentBookingComponent } from '../patient-doctor-appointment-booking/patient-doctor-appointment-booking.component';
import { Appointment_Request } from 'src/app/payload/Request/Appointment_Request ';
import { AppointmentserviceService } from 'src/app/services/doctor-service/appointmentservice.service';
import { DoctorserviceService } from 'src/app/services/doctor-service/doctorservice.service';
import { RazorpayService } from 'src/app/services/razorpay/razorpay.service';
import { TimesloteService } from 'src/app/services/doctor-service/timeslote.service';
import Swal from 'sweetalert2';
import { DoctorInvoice } from 'src/app/payload/Request/DoctorInvoice';
import { error } from 'jquery';

declare var Razorpay: any;


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  now = new Date();

  appointmentData: Appointment_Request = new Appointment_Request();
  doctorinvoice: DoctorInvoice = new DoctorInvoice();
  bookingStatus: BookingStatus = {
    isBooked: true
  };
  ammount: any;

  order = {
    // Replace with your actual amount
    currency: 'INR',  // Replace with your actual currency
    id: String  // Replace with your actual order ID
  };
  constructor(private razorpayService: RazorpayService, private appointmentService: AppointmentserviceService, private doctorService: DoctorserviceService, private timesloteservice: TimesloteService) { }
  IMG_URLs = this.doctorService.IMAGE_URL;
  apppointmrntid: any;






  makePayment(): void {
    console.log("hello at makepayment");

    const amount = (60 + this.appointmentData.doctor.rate) * 100; // Set your desired amount
    this.ammount = amount;
    this.razorpayService.createOrder(amount).subscribe((order: any) => {
      console.log("order-->>>>>" + order);
      console.log(order);
      this.order.id = order.orderId
        ;

      console.log("fuckinng id---->>>>>>" + this.order.id);

      const options = {
        key: 'rzp_test_EobRbpOb7mfGav', // Add the key_id property
        amount: amount,
        currency: order.currency,
        name: 'UpcharDwar',
        description: 'Payment for services',
        order_id: this.order.id,
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
      this.timesloteservice.booktimeslote(this.appointmentData.timeslote.id, this.bookingStatus).subscribe((data: any) => {
        console.log(this.appointmentData.timeslote.id);
        console.log("checkpoint----->>>>>" + this.appointmentData);

        this.appointmentService.addappointment(this.appointmentData).subscribe((data: any) => {

          this.apppointmrntid = data.appointment.id;
          console.log("appointment id setting here");

          console.log(data.appointment.id);

          console.log(data);
          this.Invoicefillup();
          if (this.Invoicefillup !== null) {
            this.createInvoice();
          } else {
            Swal.fire(' Issue', 'error', 'error')
          }

          Swal.fire('appointment done', 'done', 'success');

        },(error)=>{
          console.log("error at appointment add");

          console.log(error);

        })
      })

    }, (error: any) => {

      console.log(error);

    });
    return
  }

  createInvoice() {
    this.doctorService.setInvoice(this.doctorinvoice).subscribe((data: any) => {
      console.log(data);

    }, (error) => {
      Swal.fire(' Issue', 'error', 'error');
      console.log("Error At Create Invoice" + error);
      console.log(error);


    })
  }

  Invoicefillup() {

    this.doctorinvoice.amount = this.ammount/100;
    this.doctorinvoice.invoiceStatus = "AWAITED";
    this.doctorinvoice.paymentMethod = "Online-UPI";
    this.doctorinvoice.patient.id = this.appointmentData.patient.id;
    this.doctorinvoice.doctor.id = this.appointmentData.doctor.id;
    this.doctorinvoice.appointment.id = this.apppointmrntid;
    console.log("doctorInvoice------>>>>>>>>" + this.doctorinvoice);
    console.log(this.doctorinvoice);

  }






  ngOnInit(): void {



    this.appointmentService.appointmentData$.subscribe((data: any) => {
      this.appointmentData = data;
      console.log(this.appointmentData);
      console.log("appointment id");

      console.log(this.appointmentData.id);
      //setting invoices details

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
interface BookingStatus {
  isBooked: boolean;
}

function Invoicefillup() {
  throw new Error('Function not implemented.');
}

