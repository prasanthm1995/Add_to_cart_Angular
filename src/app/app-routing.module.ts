import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { ProductComponent } from './component/products/product/product.component';
import { ProductsComponent } from './component/products/products.component';

const routes: Routes = [
  {path:'',redirectTo:'',pathMatch:'full'},
  {path:'product/:id',component:ProductComponent},
  {path:'products',component:ProductsComponent},
  {path:'cart',component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
