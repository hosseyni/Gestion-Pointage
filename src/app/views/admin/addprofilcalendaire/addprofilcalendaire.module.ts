import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddprofilcalendaireRoutingModule } from './addprofilcalendaire-routing.module';
import { AddprofilcalendaireComponent } from './addprofilcalendaire/addprofilcalendaire.component';


@NgModule({
  declarations: [
    AddprofilcalendaireComponent
  ],
  imports: [
    CommonModule,
    AddprofilcalendaireRoutingModule
  ]
})
export class AddprofilcalendaireModule { }
