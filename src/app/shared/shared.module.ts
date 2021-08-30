import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog'

import { DialogComponent } from './dialog/dialog.component';
import { DialogButtonComponent } from './dialog/dialog-button.component';


@NgModule({
  declarations: [
    DialogComponent,
    DialogButtonComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    FlexLayoutModule,
  ],
  exports: [
    DialogButtonComponent
  ]
})
export class SharedModule { }
