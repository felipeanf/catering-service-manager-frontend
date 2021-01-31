import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewProductRoutingModule } from './new-product-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NewProductComponent } from './pages/new-product.component';

@NgModule({
  declarations: [
    NewProductComponent
  ],
  imports: [
    CommonModule,
    NewProductRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class NewProductModule { }
