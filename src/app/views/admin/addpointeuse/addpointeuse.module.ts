import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddpointeuseRoutingModule } from './addpointeuse-routing.module';
import { AddpointeuseComponent } from './addpointeuse/addpointeuse.component';


@NgModule({
  declarations: [
    AddpointeuseComponent
  ],
  imports: [
    CommonModule,
    AddpointeuseRoutingModule
  ]
})
export class AddpointeuseModule { }
