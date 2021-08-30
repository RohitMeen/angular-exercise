import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog.component';
import { ProductApiResponse } from '../../product-subscription/productlist.model';

export interface DialogData {
  productData: ProductApiResponse.Product,
  PlanAmmount: number
}

@Component({
  selector: 'app-dialog-button',
  template: `
    <button mat-flat-button  color="accent" (click)="onButtonClicked()" >Buy Now</button>
  `
})
export class DialogButtonComponent {

  @Input() productData?: ProductApiResponse.Product;
  @Input() planData?: ProductApiResponse.Plan;

  constructor(private dialog: MatDialog) { };

  onButtonClicked() {
    const data: DialogData = {
      productData: this.productData,
      PlanAmmount: this.planData.priceCents
    };
    this.dialog.open(DialogComponent, {
      width: '100%',
      data
    });
  }

}
