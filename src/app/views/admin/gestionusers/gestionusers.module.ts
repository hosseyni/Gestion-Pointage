import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionusersRoutingModule } from './gestionusers-routing.module';
import { GestionusersComponent } from './gestionusers/gestionusers.component';



@NgModule({
  declarations: [
    GestionusersComponent,
    
  ],
  imports: [
    CommonModule,
    GestionusersRoutingModule
  ]
})
export class GestionusersModule { }
