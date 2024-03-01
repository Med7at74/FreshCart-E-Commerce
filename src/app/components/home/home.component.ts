import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/app/core/services/product.service';
import { Product } from 'src/app/core/interfaces/product';
import { RouterLink } from '@angular/router';
import { CuttextPipe } from 'src/app/core/pipe/cuttext.pipe';
import { Categories } from 'src/app/core/interfaces/categories';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from 'src/app/core/services/cart.service';
import Swal from 'sweetalert2';
import { WishlistService } from 'src/app/core/services/wishlist.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, CuttextPipe, CarouselModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private _ProductService: ProductService,
    private _CartService: CartService,
    private _Renderer2: Renderer2,
    private _WishlistService: WishlistService
  ) {}

  productlist: Product[] = [];
  categoryList: Categories[] = [];

  wishlistProductId: Product[] = [];

  ngOnInit(): void {
    this._ProductService.getAllProduct().subscribe({
      next: (response) => {
        console.log(response.data);
        this.productlist = response.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
    this._ProductService.getCategory().subscribe({
      next: (response) => {
        console.log(response.data);
        this.categoryList = response.data;
      },
      error: (err) => {
        console.log(err);
      },
    });

    this._WishlistService.getWishlist().subscribe({
      next: (response) => {
        // console.log('wish', response.data);

        const newData = response.data.map((item: any) => item._id);
        // console.log('map', newData);

        this.wishlistProductId = newData;
      },
    });
  }

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

  // !-owl-carousel of category
  categoryOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    autoplay: true,
    autoplaySpeed: 1000,
    autoplayTimeout: 3000,
    navText: ['', ''],
    responsive: {
      0: {
        items: 2,
      },
      400: {
        items: 3,
      },
      740: {
        items: 4,
      },
      940: {
        items: 5,
      },
    },
    nav: false,
  };
  // !-owl-carousel of Mainslider
  mainSliderOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    autoplay: true,
    autoplaySpeed: 1000,
    autoplayTimeout: 4000,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
    },
    nav: false,
  };
  // add to whishlist
  addToWishlist(id: string): void {
    this._WishlistService.addProductWishlist(id).subscribe({
      next: (response) => {
        // console.log(response.data.length);
        if (response.status == 'success') {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: response.message,
            showConfirmButton: false,
            timer: 1500,
          });
          this.wishlistProductId = response.data;
          this._WishlistService.wishlistNumber.next(response.data.length);
        }
      },
    });
  }
  // remove from whishlist
  removeFromWishlist(id: string): void {
    this._WishlistService.removeProductWishlist(id).subscribe({
      next: (response) => {
        console.log(response);
        if (response.status == 'success') {
          Swal.fire({
            position: 'top-end',
            icon: 'info',
            title: response.message,
            showConfirmButton: false,
            timer: 1500,
          });

          this.wishlistProductId = response.data;
          this._WishlistService.wishlistNumber.next(response.data.length);
        }
      },
    });
  }
}
