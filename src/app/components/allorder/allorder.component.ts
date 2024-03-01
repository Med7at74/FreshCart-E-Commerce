import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from '../cart/cart.component';
import { CartService } from 'src/app/core/services/cart.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { Order } from 'src/app/core/interfaces/order';

@Component({
  selector: 'app-allorder',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './allorder.component.html',
  styleUrls: ['./allorder.component.scss'],
})
export class AllorderComponent {
  constructor(
    private _CartService: CartService,
    private _AuthService: AuthService
  ) {}

  allOrderList: Order[] = [];

  ngOnInit(): void {
    this._AuthService.decodeUserToken();
    let cartOwnerId: string = this._AuthService.usertoken.id;

    this._CartService.getUserOrder(cartOwnerId).subscribe({
      next: (response) => {
        console.log(response);
        this.allOrderList = response;
      },
    });
  }
}
