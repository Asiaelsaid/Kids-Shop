import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/Modules/iproduct';
import { ProductServiceService } from 'src/app/Services/product-service.service';
import { ProducteWithApiService } from 'src/app/Services/producte-with-api.service';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-edit-delete-product',
  templateUrl: './edit-delete-product.component.html',
  styleUrls: ['./edit-delete-product.component.css'],
})
export class EditDeleteProductComponent {
  currentProductId: number = 0;

  product: IProduct = {} as IProduct;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductServiceService,
    private router: Router,
    private productServiceApi: ProducteWithApiService
  ) {}

  ngOnInit(): void {
    this.currentProductId = Number(
      this.activatedRoute.snapshot.paramMap.get('pid')
    );

    this.activatedRoute.paramMap.subscribe((param) => {
      this.currentProductId = param.get('pid') ? Number(param.get('pid')) : 0;
      this.productServiceApi
        .getProductById(this.currentProductId)
        .subscribe((data) => {
          this.product = data;
          console.log(this.product);
        });
    });
  }
  editProduct() {
    console.log(this.product);
    this.productService.EditProduct(this.product, this.product.id).subscribe({
      next: (user1) => {
        this.router.navigate(['/Products']);
        console.log(user1);
        console.log('edited');
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  deleteProduct() {
    alert('Are you sour you want to delete');
    this.productService.DeleteProduct(this.product.id).subscribe({
      next: (user1) => {
        this.router.navigate(['/Products']);
        console.log(user1);
        console.log(' deleted');
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
