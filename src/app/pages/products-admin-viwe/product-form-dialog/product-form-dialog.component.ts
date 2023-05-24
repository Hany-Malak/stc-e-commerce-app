import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { products } from '../products-admin-viwe.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CurdSharedServiceService } from 'src/app/shared/curd-shared-service.service';
@Component({
  selector: 'app-product-form-dialog',
  templateUrl: './product-form-dialog.component.html',
  styleUrls: ['./product-form-dialog.component.sass'],
})
export class ProductFormDialogComponent implements OnInit {
  productForm!: FormGroup;
  categories!: string[];
  constructor(
    public dialogRef: MatDialogRef<ProductFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service: CurdSharedServiceService
  ) {}

  ngOnInit() {
    this.getCategories();
    this.createOrEditProduct()
    
  }

  createOrEditProduct(){
    if(this.data.actionType == 'create'){
      this.productForm = new FormGroup({
        title: new FormControl('', Validators.required),
        price: new FormControl('', Validators.required),
        category: new FormControl('', Validators.required),
        description: new FormControl('', Validators.required),
      });
    }else{}
      this.productForm = new FormGroup({
        id: new FormControl(this.data.product.id, Validators.required),
        title: new FormControl(this.data.product.title, Validators.required),
        price: new FormControl(this.data.product.price, Validators.required),
        category: new FormControl(this.data.product.category, Validators.required),
        description: new FormControl(this.data.product.description, Validators.required),
      });
  }

  getCategories() {
    this.service.getAll('products/categories').subscribe(
      (res) => {
        this.categories = res;
      },
      (error) => {
        alert('Somting Wrong !!');
      }
    );
  }

  onSubmit(form: products) {
    if(this.data.actionType == 'create'){
      this.service.createNew('products', form).subscribe(
        (res: any) => {
          if (res) {
            this.dialogRef.close(res);
          }
        },
        (error) => {
          alert('Somting Wrong !!');
        }
      );
    }
    else{
      this.service.update('products',this.data.product.id, form).subscribe(
        (res: any) => {
          if (res) {
            this.dialogRef.close(res);
          }
        },
        (error) => {
          alert('Somting Wrong !!');
        }
      );
    }
    
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
