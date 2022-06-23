import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdddepartementRoutingModule } from './adddepartement-routing.module';
import { AdddepartementComponent } from './adddepartement/adddepartement.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AdddepartementComponent
  ],
  imports: [
    CommonModule,
    AdddepartementRoutingModule,
    NgbModule,
  ]
})
export class AdddepartementModule { }
