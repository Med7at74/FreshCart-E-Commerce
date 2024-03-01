import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/app/core/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Categories } from 'src/app/core/interfaces/categories';

@Component({
  selector: 'app-brand-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './brand-details.component.html',
  styleUrls: ['./brand-details.component.scss'],
})
export class BrandDetailsComponent implements OnInit {
  constructor(
    private _ProductService: ProductService,
    private _ActivatedRoute: ActivatedRoute
  ) {}

  brandId: string | null = '';
  specificbrand: Categories = {} as Categories;

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (param) => {
        console.log(param.get('id'));
        this.brandId = param.get('id');
      },
    });

    this._ProductService.getSpaceficBrand(this.brandId).subscribe({
      next: (response) => {
        console.log(response);
        this.specificbrand = response.data;
      },
    });
  }
}
