import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsagersRoutingModule } from './usagers-routing.module';
import { UsagersComponent } from './usagers/usagers.component';
//import { BrowserModule } from '@angular/platform-browser';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
245



@NgModule({
  declarations: [
    UsagersComponent
  ],
  imports: [
    CommonModule,
  //  BrowserModule,
   // BrowserAnimationsModule,
 //   HttpModule,
   // BrowserTransferStateModule,
  //  RouterModule.forRoot(appRoutes),
    UsagersRoutingModule
  ]
})
export class UsagersModule { }
