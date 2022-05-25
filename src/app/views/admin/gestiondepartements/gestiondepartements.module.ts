import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestiondepartementsRoutingModule } from './gestiondepartements-routing.module';
import { GestiondepartementsComponent } from './gestiondepartements/gestiondepartements.component';


@NgModule({
  declarations: [
    GestiondepartementsComponent
  ],
  imports: [
    CommonModule,
    GestiondepartementsRoutingModule
  ]
})
export class GestiondepartementsModule { }
