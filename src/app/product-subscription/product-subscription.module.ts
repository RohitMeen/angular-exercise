import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ProductSubscriptionRoutingModule } from './product-subscription-routing.module';
import { ProductSubscriptionComponent } from './product-subscription.component';
import { ProductSubscriptionService } from './product-subscription.service';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ProductSubscriptionComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    ProductSubscriptionRoutingModule
  ],
  providers: [ProductSubscriptionService]
})
export class ProductSubscriptionModule { }
