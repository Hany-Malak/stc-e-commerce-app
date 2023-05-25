import { Component, OnInit } from '@angular/core';
import { CurdSharedServiceService } from 'src/app/shared/curd-shared-service.service';
import { products } from '../products-admin-viwe/products-admin-viwe.component';

@Component({
  selector: 'app-products-users-viwe',
  templateUrl: './products-users-viwe.component.html',
  styleUrls: ['./products-users-viwe.component.sass']
})
export class ProductsUsersViweComponent implements OnInit {
  categories!: string[]
  CategoryProducts:any[]= []
  constructor(private service:CurdSharedServiceService){}

  ngOnInit(){
    this.getCategories()
  }

  getCategories() {
    this.service.getAll('products/categories').subscribe(
      (res) => {
        this.categories = res;
        this.categories.forEach(item =>{
         this.getCategoryProducts(item)
         }) 
      },
      (error) => {
        alert('Somting Wrong !!');
      }
    );
  }

  getCategoryProducts(item:string){
    this.service.getByItem('products/category', item).subscribe(res =>{
      this.CategoryProducts.push(res)
      console.log( this.CategoryProducts) 
      debugger
    })
  }
}
