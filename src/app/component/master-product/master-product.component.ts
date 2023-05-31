import { Component } from '@angular/core';
import { IProduct } from 'src/app/Modules/iproduct';
@Component({
  selector: 'app-master-product',
  templateUrl: './master-product.component.html',
  styleUrls: ['./master-product.component.css'],
})
export class MasterProductComponent {
  products: IProduct[] = [];
  priceSortFunction: number = 0;
  ///Day 3 [1]



  ///Day 3 [2]
  showTableProduct(selectedProduct: any) {
    this.products.push(selectedProduct);
  }

  deleteItem(id: number) {
    let delBtn = confirm(' Do you want to delete ?');
    let index = this.products.findIndex((e) => e.id === id);
    if (index !== -1 && delBtn == true) {
      this.products.splice(index, 1);
    }
    console.log(id);
  }
}
