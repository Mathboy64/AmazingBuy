import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  search() {}

  onSignInChanges() {
    //hide signin/signup
    //show myaccount dropdown & cart
  }
  onLogout() {}

  // updateCart() {}
}
