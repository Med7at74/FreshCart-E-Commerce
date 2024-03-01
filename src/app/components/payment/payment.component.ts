import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _CartService: CartService
  ) {}

  cartId: any = '';

  paymentForm: FormGroup = new FormGroup({
    details: new FormControl(''),
    phone: new FormControl(''),
    city: new FormControl(''),
  });

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (param) => {
        console.log(param.get('id'));
        this.cartId = param.get('id');
        // this._CartService.userCartId.next(this.cartId);
        localStorage.setItem('userCartId', this.cartId);
      },
    });
  }

  payFun(): void {
    let FormValue = this.paymentForm.value;
    // console.log(this.paymentForm.value);
    this._CartService.checkOutSession(this.cartId, FormValue).subscribe({
      next: (response) => {
        console.log(response);
        // this._CartService.userCartId.next(this.cartId);
        if (response.status == 'success') {
          window.open(response.session.url, '_self');
        }
      },
    });
  }
}
