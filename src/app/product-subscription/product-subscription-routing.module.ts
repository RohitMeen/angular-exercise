import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductSubscriptionComponent } from './product-subscription.component';

const routes: Routes = [
  {
    path: '',
    component: ProductSubscriptionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductSubscriptionRoutingModule { }
