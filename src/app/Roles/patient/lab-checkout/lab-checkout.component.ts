import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LabInvoice } from 'src/app/entity/LabInvoice';
import { LabAppointment_Request } from 'src/app/payload/Request/LabAppointment_Request';
import { InvoiceService } from 'src/app/services/Invoice-Services/invoice.service';
import { LabAppointmentServiceService } from 'src/app/services/Lab-service/lab-appointment-service.service';
import { LabServiceService } from 'src/app/services/Lab-service/lab-service.service';
import { RazorpayService } from 'src/app/services/razorpay/razorpay.service';
import Swal from 'sweetalert2';
declare var Razorpay: any;
@Component({
  selector: 'app-lab-checkout',
  templateUrl: './lab-checkout.component.html',
  styleUrls: ['./lab-checkout.component.css']
})


export class LabCheckoutComponent {

  appointmentData: LabAppointment_Request = new LabAppointment_Request;
  labInvoice:LabInvoice=new LabInvoice;
  ammount: any;
  labId:any;
  order = {
      // Replace with your actual amount
    currency: 'INR',  // Replace with your actual currency
    id: String  // Replace with your actual order ID
  };
 
  constructor(private razorpayService: RazorpayService, private appointmentService: LabAppointmentServiceService, private labService:LabServiceService, private invoiceService:InvoiceService,private route:Router) { }
  IMG_URLs = this.labService.IMAGE_URL;

  apppointmentid: any;





  makePayment(): void {
    console.log("hello at makepayment");

    const amount = (60 + this.appointmentData.labTest.rates) * 100; // Set your desired amount
    this.appointmentData.amount=amount;
    this.ammount=amount;
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
      console.log(this.appointmentData);
      
      this.appointmentService.addBooking(this.appointmentData).subscribe((data:any)=>{
        alert(data.booking_id.bookingId);
        console.log(data);
        
        this.apppointmentid = data.booking_id.bookingId;
        this.Invoicefillup();
        if (this.Invoicefillup !== null) {
       this.createInvoice();
        } else {
          Swal.fire(' Issue', 'error', 'error')
        }
        Swal.fire('appointment done', 'done', 'success');
       this.route.navigate(['/patientmaindashboard/patientdashboard'])
      })
    }, (error: any) => {

      console.log(error);

    });
    return
  }


  Invoicefillup() {

    this.labInvoice.totalAmount =   this.appointmentData.amount/100;
    
    this.labInvoice.paymentMethod = "Online-UPI";
    this.labInvoice.patient.id = this.appointmentData.patient.id;
    this.labInvoice.labTest.id = this.appointmentData.labTest.id;
    alert('inside'+this.apppointmentid)
    this.labInvoice .booking.id = this.apppointmentid;
    
    this.labInvoice.labId=this.labId;
    this.labInvoice.invoiceId=this.apppointmentid
    console.log("doctorInvoice------>>>>>>>>" + this.labInvoice.invoiceId);
    console.log("test at lab checkout-------------------"+this.labId); 

  }

  createInvoice() {
    this.invoiceService.generateInvoice(this.labInvoice).subscribe((data: any) => {
      console.log(data);

    }, (error) => {
      Swal.fire(' Issue', 'error', 'error');
      console.log("Error At Create Invoice" + error);
      console.log(error);


    })
  }



  ngOnInit(): void {



    this.appointmentService.appointmentData$.subscribe((data: any) => {
      this.appointmentData = data;
      console.log(this.appointmentData);
      this.labId=this.appointmentData.lab.id;
      console.log("test at lab checkout-------------------"+this.labId);
      

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
