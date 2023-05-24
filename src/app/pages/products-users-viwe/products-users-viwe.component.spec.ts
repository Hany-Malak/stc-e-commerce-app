import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsUsersViweComponent } from './products-users-viwe.component';

describe('ProductsUsersViweComponent', () => {
  let component: ProductsUsersViweComponent;
  let fixture: ComponentFixture<ProductsUsersViweComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsUsersViweComponent]
    });
    fixture = TestBed.createComponent(ProductsUsersViweComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
