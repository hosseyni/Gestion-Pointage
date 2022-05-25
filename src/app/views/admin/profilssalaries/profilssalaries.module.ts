import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilssalariesRoutingModule } from './profilssalaries-routing.module';
import { ProfilssalariesComponent } from './profilssalaries/profilssalaries.component';


@NgModule({
  declarations: [
    ProfilssalariesComponent
  ],
  imports: [
    CommonModule,
    ProfilssalariesRoutingModule
  ]
})
export class ProfilssalariesModule { }
