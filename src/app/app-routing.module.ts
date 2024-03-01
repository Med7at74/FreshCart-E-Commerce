import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./layouts/blank-layout/blank-layout.component').then(
        (m) => m.BlankLayoutComponent
      ),
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadComponent: () =>
          import('./components/home/home.component').then(
            (m) => m.HomeComponent
          ),
        title: 'Home',
      },
      {
        path: 'cart',
        loadComponent: () =>
          import('./components/cart/cart.component').then(
            (m) => m.CartComponent
          ),
        title: 'Cart',
      },
      {
        path: 'wishlist',
        loadComponent: () =>
          import('./components/wishlist/wishlist.component').then(
            (m) => m.WishlistComponent
          ),
        title: 'Wishlist',
      },
      {
        path: 'products',
        loadComponent: () =>
          import('./components/products/products.component').then(
            (m) => m.ProductsComponent
          ),
        title: 'Products',
      },
      {
        path: 'details/:id',
        loadComponent: () =>
          import('./components/details/details.component').then(
            (m) => m.DetailsComponent
          ),
        title: 'Product Details',
      },
      {
        path: 'payment/:id',
        loadComponent: () =>
          import('./components/payment/payment.component').then(
            (m) => m.PaymentComponent
          ),
        title: 'Online Payment',
      },
      {
        path: 'brands',
        loadComponent: () =>
          import('./components/brands/brands.component').then(
            (m) => m.BrandsComponent
          ),
        title: 'Brands',
      },
      {
        path: 'allorders',
        loadComponent: () =>
          import('./components/allorder/allorder.component').then(
            (m) => m.AllorderComponent
          ),
        title: 'All Orders',
      },
      {
        path: 'forgetPassword',
        loadComponent: () =>
          import('./components/forget-password/forget-password.component').then(
            (m) => m.ForgetPasswordComponent
          ),
        title: 'Forget Password',
      },
      {
        path: 'categories',
        loadComponent: () =>
          import('./components/categories/categories.component').then(
            (m) => m.CategoriesComponent
          ),
        title: 'Categories',
      },
      {
        path: 'categoryDetails/:id',
        loadComponent: () =>
          import(
            './components/category-details/category-details.component'
          ).then((m) => m.CategoryDetailsComponent),
        title: 'Category Details',
      },
      {
        path: 'brandDetails/:id',
        loadComponent: () =>
          import('./components/brand-details/brand-details.component').then(
            (m) => m.BrandDetailsComponent
          ),
        title: 'Brand Details',
      },
      // {path:'home' , loadComponent:()=>import("./components/home/home.component").then( (m)=>m.HomeComponent)},
    ],
  },
  {
    path: '',
    loadComponent: () =>
      import('./layouts/auth-layout/auth-layout.component').then(
        (m) => m.AuthLayoutComponent
      ),
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      {
        path: 'login',
        loadComponent: () =>
          import('./components/login/login.component').then(
            (m) => m.LoginComponent
          ),
        title: 'Login',
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./components/register/register.component').then(
            (m) => m.RegisterComponent
          ),
        title: 'Register',
      },
      {
        path: 'forgetpass',
        loadComponent: () =>
          import('./components/forget-password/forget-password.component').then(
            (m) => m.ForgetPasswordComponent
          ),
        title: 'Forget Password',
      },
    ],
  },

  {
    path: '**',
    loadComponent: () =>
      import('./components/notfound/notfound.component').then(
        (m) => m.NotfoundComponent
      ),
    title: 'Page Not Fouund',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
