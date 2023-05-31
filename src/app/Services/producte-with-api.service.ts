import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../Modules/iproduct';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ProducteWithApiService {
  constructor(private httpClient: HttpClient) {}
  getAllProduct(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(`${environment.APIURL}/products`);
  }
  getProductById(productId: number):Observable<IProduct> {
    return this.httpClient.get<IProduct>(
      `${environment.APIURL
      }/products/${productId}`
      );
    }
    getProductByCategoryId(catId: number):Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(`${environment.APIURL}/products?CateogryID${catId}`);

  }
  // addProduct(newProduct: IProduct) {}
  // updateProduct(proId: number, updataProduct: IProduct) {}
  // deletProduct(proId: number) {}
}
