import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddpointeuseRoutingModule } from './addpointeuse-routing.module';
import { AddpointeuseComponent } from './addpointeuse/addpointeuse.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddpointeuseComponent
  ],
  imports: [
    CommonModule,
    AddpointeuseRoutingModule,
    FormsModule
  ]
})
export class AddpointeuseModule { }
