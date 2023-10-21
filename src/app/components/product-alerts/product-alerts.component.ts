import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../../models/products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.sass']
})
export class ProductAlertsComponent {
  // this indicates that the property value passes in from the component's parent, ProductList
  @Input() product: Product | undefined;
  // pass data to a parent component. this allows ProductAlerts component to emit an event when the value of the notify property changes.
  @Output() notify = new EventEmitter();
}
