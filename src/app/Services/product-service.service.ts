import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IProduct } from '../Modules/iproduct';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root',
})
export class ProductServiceService {
  http = {};
  constructor(private HttpClient: HttpClient) {
    this.http = {
      headers: new HttpHeaders({
        'Content-Type': 'appliction/json',
      }),
    };
  }
  addProduct(newProduct: IProduct): Observable<IProduct> {
    return this.HttpClient.post<IProduct>(
      `${environment.APIURL}/products`,
      JSON.stringify(newProduct),
      this.http
    );
  }
  EditProduct(product: IProduct, id: number): Observable<IProduct> {
    return this.HttpClient.put<IProduct>(
      `${environment.APIURL}/products/${id}`,
      JSON.stringify(product),
      this.http
    );
  }
  DeleteProduct(id: number) {
    return this.HttpClient.delete(`${environment.APIURL}/products/${id}`);
  }
}
