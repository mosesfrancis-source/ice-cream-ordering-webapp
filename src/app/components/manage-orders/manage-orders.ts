import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-manage-orders',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './manage-orders.html',
  styleUrl: './manage-orders.css',
})
export class ManageOrders {
  orders = [
    {
      id: 1,
      customer: 'Moses Francis',
      items: 'Vanilla x2, Chocolate x1',
      pickup: '3:00 PM',
      status: 'Pending',
    },
    {
      id: 2,
      customer: 'Stephanie Pelham',
      items: 'Strawberry x1',
      pickup: '4:30 PM',
      status: 'Completed',
    },
  ];

  markComplete(order: any) {
    order.status = 'Completed';
  }

  cancelOrder(order: any) {
    order.status = 'Cancelled';
  }
}
