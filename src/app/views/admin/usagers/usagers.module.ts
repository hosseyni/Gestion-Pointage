import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsagersRoutingModule } from './usagers-routing.module';
import { UsagersComponent } from './usagers/usagers.component';


@NgModule({
  declarations: [
    UsagersComponent
  ],
  imports: [
    CommonModule,
    UsagersRoutingModule
  ]
})
export class UsagersModule { }
