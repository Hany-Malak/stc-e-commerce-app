import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ProductsAdminViweComponent } from './pages/products-admin-viwe/products-admin-viwe.component';
import { ProductsUsersViweComponent } from './pages/products-users-viwe/products-users-viwe.component';

const routes: Routes = [
  { path:  '', component: LoginComponent },
  { path:  'admin/products', component: ProductsAdminViweComponent },
  { path:  'user/products', component: ProductsUsersViweComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
