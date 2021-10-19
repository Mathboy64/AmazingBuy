import { Component, Input, OnInit } from '@angular/core';
import { CartCall } from '../cart-call';
import { OrderService } from '../service/order.service';
import { Product } from '../service/product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [CartCall],
})
export class NavbarComponent implements OnInit {
  products: string[] = [];
  searchText!: string;
  show: boolean = false;
  productsQuantity!: number;

  constructor(private sharedDataService: CartCall, private ps: ProductService, private os: OrderService) {
    // this.productsQuantity = 5;
    this.ps.getAllProducts().subscribe((data) => {
      data.forEach((element) => {
        this.products.push(element.name);
      });
    });
  }

  ngOnInit(): void {
    // this.sharedDataService.currentMessage.subscribe(
    //   (message) => (this.productsQuantity = message)
    // );
    this.getProductsQuantityInCart();
    // setInterval(() => {
    //   this.getProductsQuantityInCart();
    // }, 5000);
  }

  getProductsQuantityInCart() {
    this.os.getAllOrders().subscribe((res) => {
      this.productsQuantity = res[res.length - 1]?.products.length;
      // console.log(res);
    });
  }
  handleClick(p: Product) {
    console.log(p);
  }

  onSignInChanges() {
    //hide signin/signup
    //show myaccount dropdown & cart
  }
  onLogout() {}

  // updateCart() {}
}
