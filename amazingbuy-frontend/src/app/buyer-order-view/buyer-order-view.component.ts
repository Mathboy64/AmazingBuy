import { Component, OnInit } from '@angular/core';
import { Order } from '../service/order';
import { OrderService } from '../service/order.service';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-buyer-order-view',
  templateUrl: './buyer-order-view.component.html',
  styleUrls: ['./buyer-order-view.component.css'],
})
export class BuyerOrderViewComponent implements OnInit {
  ELEMENT_DATA: PeriodicElement[] = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  ];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = this.ELEMENT_DATA;
  constructor(private os: OrderService) {}
  orders!: Order[];
  filteredOrders!: Order[];

  filterPaidOrders() {}

  sumOrdersPrice() {}

  onCancel() {}

  getOrdersByAccountId(id: number) {
    this.os
      .findByAccountId(id)
      .subscribe((res) =>
        console.log(`Account 1 orders: ${JSON.stringify(res)}`)
      );
  }
  ngOnInit(): void {}
}
