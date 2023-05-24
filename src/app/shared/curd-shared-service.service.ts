import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { products } from '../pages/products-admin-viwe/products-admin-viwe.component';



@Injectable({
  providedIn: 'root'
})
export class CurdSharedServiceService {
  private  baseURL:string= 'https://fakestoreapi.com/'
  constructor(private http: HttpClient) { }

  getAll(url: string) : Observable<any>{
    return this.http.get(`${this.baseURL}${url}`)
  }

  createNew(url: string, data:products) : Observable<any>{
    return this.http.post(`${this.baseURL}${url}`, data)
  }

  update(){

  }

  delete(){

  }
}
