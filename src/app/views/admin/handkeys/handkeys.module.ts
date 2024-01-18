import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HandkeysRoutingModule } from './handkeys-routing.module';
import { HandkeysComponent } from './handkeys/handkeys.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HandkeysComponent
  ],
  imports: [
    CommonModule,
    HandkeysRoutingModule,
    FormsModule
  ]
})
export class HandkeysModule { }
