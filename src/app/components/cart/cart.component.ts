import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent {
  items = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  })

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  // This method allows users to submit their name and address. Then clears the cart.
  onSubmit(): void {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    console.warn("Your order has been submitted!", this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
