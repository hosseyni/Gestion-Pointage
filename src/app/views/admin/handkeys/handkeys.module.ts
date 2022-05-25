import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HandkeysRoutingModule } from './handkeys-routing.module';
import { HandkeysComponent } from './handkeys/handkeys.component';


@NgModule({
  declarations: [
    HandkeysComponent
  ],
  imports: [
    CommonModule,
    HandkeysRoutingModule
  ]
})
export class HandkeysModule { }
