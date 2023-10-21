import { Component } from '@angular/core';

import { products } from '../../models/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent {
  products = [...products];

  share() {
    window.alert("Thanks for sharing!")
  }

  onNotify() {
    window.alert("You will be notified!")
  }
}
