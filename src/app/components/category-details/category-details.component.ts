import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/app/core/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Categories } from 'src/app/core/interfaces/categories';

@Component({
  selector: 'app-category-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.scss'],
})
export class CategoryDetailsComponent implements OnInit {
  constructor(
    private _ProductService: ProductService,
    private _ActivatedRoute: ActivatedRoute
  ) {}

  categoryId: string | null = '';
  spacfCatDetails: Categories = {} as Categories;

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (param) => {
        console.log(param.get('id'));
        this.categoryId = param.get('id');
      },
    });

    this._ProductService.getSpacificCategory(this.categoryId).subscribe({
      next: (response) => {
        console.log(response);
        this.spacfCatDetails = response.data;
      },
    });
  }
}
