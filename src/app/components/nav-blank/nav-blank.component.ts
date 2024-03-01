import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { CartService } from 'src/app/core/services/cart.service';
import { WishlistService } from 'src/app/core/services/wishlist.service';

@Component({
  selector: 'app-nav-blank',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './nav-blank.component.html',
  styleUrls: ['./nav-blank.component.scss'],
})
export class NavBlankComponent implements OnInit {
  constructor(
    private _AuthService: AuthService,
    private _CartService: CartService,
    private _Renderer2: Renderer2,
    private _WishlistService: WishlistService
  ) {}

  // add transition to navbar when user scroll

  @ViewChild('navBar') navbarElement!: ElementRef;

  @HostListener('window:scroll')
  onscroll() {
    if (scrollY > 300) {
      this._Renderer2.addClass(this.navbarElement.nativeElement, 'py-4');
      this._Renderer2.addClass(this.navbarElement.nativeElement, 'px-5');
      this._Renderer2.addClass(this.navbarElement.nativeElement, 'shadow');
    } else {
      this._Renderer2.removeClass(this.navbarElement.nativeElement, 'py-4');
      this._Renderer2.removeClass(this.navbarElement.nativeElement, 'px-5');
      this._Renderer2.removeClass(this.navbarElement.nativeElement, 'shadow');
    }
  }

  numberOfCart: number = 0;
  numberOfWishlist: number = 0;

  ngOnInit(): void {
    // ! get the number of items in cart
    this._CartService.cartNumber.subscribe({
      next: (data) => {
        this.numberOfCart = data;
      },
    });
    this._CartService.getUserCart().subscribe({
      next: (response) => {
        this.numberOfCart = response.numOfCartItems;
      },
      error: (err) => {
        console.log(err);
      },
    });

    // ! get the number of items in wishlist
    this._WishlistService.wishlistNumber.subscribe({
      next: (data) => {
        this.numberOfWishlist = data;
      },
    });
    this._WishlistService.getWishlist().subscribe({
      next: (response) => {
        this.numberOfWishlist = response.count;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  logout() {
    this._AuthService.logout();
  }
}
