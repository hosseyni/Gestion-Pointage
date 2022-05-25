import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdddepartementRoutingModule } from './adddepartement-routing.module';
import { AdddepartementComponent } from './adddepartement/adddepartement.component';


@NgModule({
  declarations: [
    AdddepartementComponent
  ],
  imports: [
    CommonModule,
    AdddepartementRoutingModule
  ]
})
export class AdddepartementModule { }
