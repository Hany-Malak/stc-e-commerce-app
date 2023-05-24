import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { products } from '../products-admin-viwe.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-product-form-dialog',
  templateUrl: './product-form-dialog.component.html',
  styleUrls: ['./product-form-dialog.component.sass']
})
export class ProductFormDialogComponent  implements OnInit {
  productForm!: FormGroup

  constructor(
    public dialogRef: MatDialogRef<ProductFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: products,
  ) {}

  ngOnInit() {
    this.productForm = new FormGroup({
      title: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });
  }
  onSubmit(form:products){
    debugger
    console.log(form)
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
