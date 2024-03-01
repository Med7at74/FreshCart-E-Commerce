import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/core/services/product.service';
import { Product } from 'src/app/core/interfaces/product';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from 'src/app/core/services/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _ProductService: ProductService,
    private _Renderer2: Renderer2,
    private _CartService: CartService
  ) {}
  productId: string | null = '';
  // productDetails: any = null;
  productDetails: Product | null = null;
  ngOnInit(): void {
    // get product id
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        console.log(params.get('id'));
        this.productId = params.get('id');
      },
    });
    // get custom product details
    this._ProductService.getProductDetails(this.productId).subscribe({
      // we have another way to get data from object by destruct the object next:({data}){  console.log(data) }
      next: (response) => {
        console.log(response.data);
        this.productDetails = response.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  // Add product To Cart
  addProduct(ProdId: string, ele: HTMLButtonElement): void {
    this._Renderer2.setAttribute(ele, 'disabled', 'true');
    this._CartService.addToCart(ProdId).subscribe({
      next: (response) => {
        console.log(response);

        if (response.status == 'success') {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: response.message,
            showConfirmButton: false,
            timer: 1500,
          });
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

  // caresoul options
  ProductDetailsOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    margin: 5,
    autoplay: true,
    autoplaySpeed: 1000,
    autoplayTimeout: 4000,
    navSpeed: 700,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 3,
      },
    },
    nav: true,
  };
}
