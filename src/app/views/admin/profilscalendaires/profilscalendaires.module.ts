import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilscalendairesRoutingModule } from './profilscalendaires-routing.module';
import { ProfilscalendairesComponent } from './profilscalendaires/profilscalendaires.component';


@NgModule({
  declarations: [
    ProfilscalendairesComponent
  ],
  imports: [
    CommonModule,
    ProfilscalendairesRoutingModule
  ]
})
export class ProfilscalendairesModule { }
