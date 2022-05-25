import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddabsenseRoutingModule } from './addabsense-routing.module';
import { AddabsenseComponent } from './addabsense/addabsense.component';


@NgModule({
  declarations: [
    AddabsenseComponent
  ],
  imports: [
    CommonModule,
    AddabsenseRoutingModule
  ]
})
export class AddabsenseModule { }
