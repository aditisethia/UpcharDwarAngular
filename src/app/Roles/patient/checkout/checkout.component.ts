import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
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
