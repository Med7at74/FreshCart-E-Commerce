import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from 'src/app/core/services/cart.service';
import { ProductCart } from 'src/app/core/interfaces/product-cart';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  constructor(
    private _CartService: CartService,
    private _Renderer2: Renderer2
  ) {}

  cartDetails: ProductCart | null = null;

  ngOnInit(): void {
    this._CartService.getUserCart().subscribe({
      next: (response) => {
        console.log(response);
        if (response.status == 'success') {
          this.cartDetails = response.data;
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  removeItem(itemId: string, ele: HTMLButtonElement) {
    this._Renderer2.setAttribute(ele, 'disabled', 'true');

    this._CartService.removeItemFromCart(itemId).subscribe({
      next: (response) => {
        console.log(response);
        if (response.status == 'success') {
          this.cartDetails = response.data;
          this._Renderer2.removeAttribute(ele, 'disabled');
          this._CartService.cartNumber.next(response.numOfCartItems);
        }
      },
      error: (err) => {
        console.log(err);
        this._Renderer2.removeAttribute(ele, 'disabled');
      },
    });
  }

  changeCount(
    id: string,
    count: number,
    el1: HTMLButtonElement,
    el2: HTMLButtonElement
  ) {
    if (count >= 1) {
      this._Renderer2.setAttribute(el1, 'disabled', 'true');
      this._Renderer2.setAttribute(el2, 'disabled', 'true');

      this._CartService.updateCart(id, count).subscribe({
        next: (response) => {
          console.log(response);
          if (response.status == 'success') {
            this.cartDetails = response.data;
            this._Renderer2.removeAttribute(el1, 'disabled');
            this._Renderer2.removeAttribute(el2, 'disabled');
          }
        },
        error: (err) => {
          console.log(err);
          this._Renderer2.removeAttribute(el1, 'disabled');
          this._Renderer2.removeAttribute(el2, 'disabled');
        },
      });
    } else {
      console.log(' no ');
    }
  }

  clearCart() {
    this._CartService.clearAllCart().subscribe({
      next: (response) => {
        console.log(response);
        if (response.message == 'success') {
          this.cartDetails = null;
          this._CartService.cartNumber.next(0);
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
