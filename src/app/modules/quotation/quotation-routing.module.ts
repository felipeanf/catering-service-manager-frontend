import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditQuotationComponent } from './pages/edit-quotation/edit-quotation.component';
import { NewQuotationComponent } from './pages/new-quotation/new-quotation.component';
import { QuotationComponent } from './pages/quotation.component';


const routes: Routes = [
  { path: '', component: QuotationComponent },
  { path: ':id', component: EditQuotationComponent },
  { path: 'new', component: NewQuotationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuotationRoutingModule {
}
