// import { Component, OnInit } from '@angular/core';
// import { AccountService } from '../service/account.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css'],
// })
// export class LoginComponent implements OnInit {
//   constructor(private as: AccountService) {}

//   ngOnInit(): void {}

//   onSuccessSigning() {}

//   signIn() {
//     this.as
//       .getAccountByEmailNPassword('rob@gmail.com', 'rob')
//       .subscribe((res) => {
//         // this.signedAccount = res;
//         console.log(res);
//         // this.getOrdersByAccountId(this.signedAccount.id);
//       });
//   }
// }

import { Component, OnInit } from '@angular/core';
import { AccountService } from '../service/account.service';
import { Account } from '../service/account';
import { SignAccount } from '../service/sign-account';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  
  constructor(private as: AccountService, private sa: SignAccount) {}
  signin:any={};
  myForm:any={};
  submitted=false;

  ngOnInit(): void {
    console.log('hello');
  }
  
  
  onSubmit():void {
    this.submitted = true;
    console.log('Email: ' + this.signin.Email);
    console.log('Password: ' + this.signin.Password);
    this.signIn(this.signin.Email, this.signin.Password);
  }

  onSuccessSigning(account:Account) {
    console.log("Success!");
  }

  signIn(email:string, password:string) {
    try{
      this.as
      .getAccountByEmailAndPassword(email, password)
      .subscribe((res) => {
        this.onSuccessSigning(res);
        this.sa.setSignedAccount(res);
      });
    }catch(error){
      this.onFaliureSigning();
    }
  }
  
onFaliureSigning():void {
  console.log("This is wrong");
}


}


