import {  Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CurdSharedServiceService } from 'src/app/shared/curd-shared-service.service';
import { ProductFormDialogComponent } from './product-form-dialog/product-form-dialog.component';

export interface products {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-products-admin-viwe',
  templateUrl: './products-admin-viwe.component.html',
  styleUrls: ['./products-admin-viwe.component.sass'],
})
export class ProductsAdminViweComponent implements OnInit {

  displayedColumns: string[] = ['id', 'title', 'price', 'category', 'actions'];
  dataSource!: MatTableDataSource<products>;
  productsArray!: products[];
  product! : products
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private service: CurdSharedServiceService,
    public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getProducts();
  }


  getProducts() {
    this.service.getAll('products').subscribe((res) => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    },error => {
      alert('Somting Wrong !!');
    });
  }

  openDialog(actionType:string, product?: products){
    const dialogRef = this.dialog.open(ProductFormDialogComponent, {
      //data: ,
    });

    dialogRef.afterClosed().subscribe(result => {
      const data = this.dataSource.data;
      data.push(result);
      this.dataSource.data = data;
    });
  }
}
