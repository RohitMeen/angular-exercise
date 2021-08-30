import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ProductApiResponse } from './productlist.model'
@Injectable({
  providedIn: 'root'
})
export class ProductSubscriptionService {

  constructor(
    private http: HttpClient
  ) { };


  getProductsInformation(): Observable<ProductApiResponse> {
    return this.http.get<ProductApiResponse>(environment.apiUrl);
  };

  
}
