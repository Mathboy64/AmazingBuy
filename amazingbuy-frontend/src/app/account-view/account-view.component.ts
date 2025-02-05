import { Component, OnInit } from '@angular/core';
import { Account } from '../service/account';
import { AccountService } from '../service/account.service';
import { OrderService } from '../service/order.service';

@Component({
  selector: 'app-account-view',
  templateUrl: './account-view.component.html',
  styleUrls: ['./account-view.component.css'],
})
export class AccountViewComponent implements OnInit {
  // account!: Account;
  signedAccount!: Account;
  id!: number;
  accountId: any = sessionStorage.getItem('id')
    ? sessionStorage.getItem('id')
    : 0;
  signedId: number = this.accountId;

  constructor(private as: AccountService, private os: OrderService) {}

  ngOnInit(): void {
    // this.signIn();
    // this.getOrdersByAccountId(1);
    // console.log(this.signedId);
    this.getAccountById(this.signedId);
  }
  // getAllAccounts() {
  //   this.as.getAllAccounts().subscribe((res) => (this.accounts = res));
  // }
  //this method will be moved to signIn-view

  // signIn() {
  //   this.as
  //     .getAccountByEmailNPassword('rob@gmail.edu', '1234')
  //     .subscribe((res) => {
  //       this.signedAccount = res;
  //       console.log(this.signedAccount);
  //     });
  // }


  getAccountById(id: number) {
    this.as.getAccountById(id).subscribe((res) => {
      console.log(res);
      this.signedAccount = res;
    });
  }

  // getOrdersByAccountId(id: number) {
  //   this.os
  //     .getAllOrders()
  //     .subscribe((res) => console.log(res.filter((o) => o.account?.id === id)));
  // }

  onSubmit() {
    console.log(this.signedAccount);
    this.as.updateAccount(this.signedAccount.id, this.signedAccount).subscribe(
      (res) => console.log(res),
      (error) => console.log(error)
    );
  }

  getSignedAccountDetails() {
    
  }

}
