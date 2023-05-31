import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/Modules/iproduct';
import { ProductServiceService } from 'src/app/Services/product-service.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent {

  product: IProduct = {} as IProduct;
  constructor(private productService: ProductServiceService, private router: Router) {}
  addProduct() {
    this.productService.addProduct(this.product).subscribe({
      next: (newproduct) => {
        this.router.navigate(['/Products']);
        console.log(newproduct);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

}
