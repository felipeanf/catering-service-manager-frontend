import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { CustomersComponent } from './pages/customers/customers.component';


const routes: Routes = [
  {path: '', component: CustomersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {
}
