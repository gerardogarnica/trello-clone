import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';

import { Product } from '../../models/product.model';
import { DataSourceProduct } from './data-source';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent {
  input = new FormControl('', { nonNullable: true });
  productsDataSource = new DataSourceProduct();
  displayedColumns: string[] = ['id', 'title', 'price', 'cover', 'actions'];
  total = 0;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products')
      .subscribe((data) => {
        this.productsDataSource.init(data);
        this.total = this.productsDataSource.getTotalPrices();
      });

    this.input.valueChanges
      .pipe(
        debounceTime(300)
      ).subscribe((value) => {
        this.productsDataSource.find(value);
      });
  }

  update(product: Product) {
    this.productsDataSource.update(product.id, { price: product.price + 100 });
  }

}
