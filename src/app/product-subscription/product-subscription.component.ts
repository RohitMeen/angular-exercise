import { Component, OnInit, OnDestroy } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { ProductSubscriptionService } from './product-subscription.service';
import { ProductApiResponse } from './productlist.model'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-subscription',
  templateUrl: './product-subscription.component.html',
  styleUrls: ['./product-subscription.component.scss']
})
export class ProductSubscriptionComponent implements OnInit, OnDestroy {
  public productsArray: ProductApiResponse.Product[] = [];
  public isLoading: boolean = false;
  public deviceXs: boolean;
  mediaSubscription: Subscription;
  constructor(
    public mediaObserver: MediaObserver,
    private productSubscriptionService: ProductSubscriptionService) { }

  ngOnInit(): void {
    this.mediaSubscription = this.mediaObserver.media$.subscribe((result: MediaChange) => {
      this.deviceXs = result.mqAlias === 'xs' ? true : false;
    });
    this.getProductsInformation();
  }

  getProductsInformation() {
    this.isLoading = true;
    this.productSubscriptionService.getProductsInformation().subscribe((result: ProductApiResponse) => {
      if (result.products.length > 0) {
        this.productsArray = result.products;
      };
      this.isLoading = false;
    }, (error => {
      console.log('error', error);
    }))
  }

  getPaymentIntervalValue(plan:ProductApiResponse.Plan) {
    if (!plan) {
      return ''
    }
    if (this.isPaymentInterval(plan)) {
      return plan.paymentInterval;
    }
    if (this.isInterval(plan)) {
      return plan.interval;
    }
  }


  private isPaymentInterval(planData: ProductApiResponse.Plan1 | ProductApiResponse.Plan2): planData is ProductApiResponse.Plan1 {
    return planData.hasOwnProperty('paymentInterval')
  };
  private isInterval(planData: ProductApiResponse.Plan1 | ProductApiResponse.Plan2): planData is ProductApiResponse.Plan2 {
    return planData.hasOwnProperty('interval');
  }

  ngOnDestroy() {
    this.mediaSubscription.unsubscribe();
  }





}
