import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductCreateComponent } from './components/products/product-create/product-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from'./views/home/home.component'
import {ProductCrudComponent } from './views/product-crud/product-crud.component'
import  {ProductListComponent} from'./views/product-list/product-list.component'

const routes: Routes = [
  {
  path: "",
  component: HomeComponent
},{
  path:"cadastro",
  component: ProductCrudComponent
},{
  path: "produtos",
  component: ProductListComponent
},{
  path: "cadastro/create",
  component: ProductCreateComponent
},{
  path: "produtos/update/:id",
  component: ProductUpdateComponent
},{
  path: "produtos/delete/:id",
  component: ProductDeleteComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
