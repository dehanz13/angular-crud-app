import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products} from '../../models/products';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.sass']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }
  
  ngOnInit(): void {
      // First get the product id from the current route.
      const routeParams = this.route.snapshot.paramMap;
      const productIdFromRoute = Number(routeParams.get("productId"))
      // Find the product that correspond with the id provided in route.
      this.product = products.find(product => product.id === productIdFromRoute)
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product)
    // window.alert("Item has been added to cart!");
    console.log("Item has been added to cart!")
    console.log("Total items in cart: " + this.product?.name)
  }
}
