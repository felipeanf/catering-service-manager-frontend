import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  private productsUrl = 'http://localhost:8000/product'; 
  public products = [];
  

  constructor(private http: HttpClient) { }

    getProductsData(): Observable<any>{
      return this.http.get(this.productsUrl);
    }
}