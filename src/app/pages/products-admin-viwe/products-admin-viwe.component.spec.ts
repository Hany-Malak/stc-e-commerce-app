import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsAdminViweComponent } from './products-admin-viwe.component';

describe('ProductsAdminViweComponent', () => {
  let component: ProductsAdminViweComponent;
  let fixture: ComponentFixture<ProductsAdminViweComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsAdminViweComponent]
    });
    fixture = TestBed.createComponent(ProductsAdminViweComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
