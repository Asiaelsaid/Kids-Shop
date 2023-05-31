import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/Modules/iproduct';
import { ProducteWithApiService } from 'src/app/Services/producte-with-api.service';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-product-detials',
  templateUrl: './product-detials.component.html',
  styleUrls: ['./product-detials.component.css'],
})
export class ProductDetialsComponent implements OnInit {
  currentProductId: number = 0;
  product: IProduct | null = null;
  productsId: number[] = [];
  retunCurrentId: number = 0;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductsService,
    private router: Router,
    private productServiceApi: ProducteWithApiService
  ) {}
  ngOnInit(): void {
    this.currentProductId = Number(
      this.activatedRoute.snapshot.paramMap.get('pid')
    );
    // this.product = this.productService.getProductById(this.currentProductId);
    // this.productsId=this.productService.getAllIdsOfProduct();
    this.activatedRoute.paramMap.subscribe((param) => {
      this.currentProductId = param.get('pid') ? Number(param.get('pid')) : 0;

      // let productOfId = this.productService.getProductById(
      //   this.currentProductId
      // );
      // if (productOfId) {
      //   this.product = productOfId;
      // } else {
      //   alert('Not found !');
      // }
      this.productServiceApi.getProductById(this.currentProductId).subscribe(data=>{
        this.product=data;
        console.log(this.product);

      })
    });
  }
  goBack() {
    this.router.navigate(['Products']);
  }
  previous() {
    this.retunCurrentId = this.productsId.findIndex(
      (pro) => pro == this.currentProductId
    );

    this.router.navigate(['/Product', this.productsId[--this.retunCurrentId]]);
  }
  next() {
    this.retunCurrentId = this.productsId.findIndex(
      (pro) => pro == this.currentProductId
    );
    this.router.navigate(['/Product', this.productsId[++this.retunCurrentId]]);
  }
}
