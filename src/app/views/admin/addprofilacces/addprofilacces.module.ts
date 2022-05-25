import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddprofilaccesRoutingModule } from './addprofilacces-routing.module';
import { AddprofilaccesComponent } from './addprofilacces/addprofilacces.component';


@NgModule({
  declarations: [
    AddprofilaccesComponent
  ],
  imports: [
    CommonModule,
    AddprofilaccesRoutingModule
  ]
})
export class AddprofilaccesModule { }
