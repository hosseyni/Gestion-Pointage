import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddsessionRoutingModule } from './addsession-routing.module';
import { AddsessionComponent } from './addsession/addsession.component';


@NgModule({
  declarations: [
    AddsessionComponent
  ],
  imports: [
    CommonModule,
    AddsessionRoutingModule
  ]
})
export class AddsessionModule { }
