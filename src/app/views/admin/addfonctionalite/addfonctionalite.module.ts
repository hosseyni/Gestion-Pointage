import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddfonctionaliteRoutingModule } from './addfonctionalite-routing.module';
import { AddfonctionaliteComponent } from './addfonctionalite/addfonctionalite.component';


@NgModule({
  declarations: [
    AddfonctionaliteComponent
  ],
  imports: [
    CommonModule,
    AddfonctionaliteRoutingModule
  ]
})
export class AddfonctionaliteModule { }
