import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CurdSharedServiceService {
  private  baseURL= 'https://fakestoreapi.com/products'
  constructor(private http: HttpClient) { }

  getAll() : Observable<any>{
    return this.http.get(this.baseURL)
  }

  createNew(){

  }

  update(){

  }

  delete(){

  }
}
