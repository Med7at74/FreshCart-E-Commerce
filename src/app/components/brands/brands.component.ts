import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/app/core/services/product.service';
import { Categories } from 'src/app/core/interfaces/categories';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss'],
})
export class BrandsComponent implements OnInit {
  constructor(private _ProductService: ProductService) {}

  brandList: Categories[] = [];
  ngOnInit(): void {
    this._ProductService.getBrands().subscribe({
      next: (response) => {
        console.log(response.data);
        this.brandList = response.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
