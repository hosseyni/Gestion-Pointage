import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { AddprofilsalariesRoutingModule } from './views/admin/addprofilsalaries/addprofilsalaries-routing.module';
import { AddprofilsalariesModule } from './views/admin/addprofilsalaries/addprofilsalaries.module';
import { AddusagerModule } from './views/admin/addusager/addusager.module';
import { AddusagerRoutingModule } from './views/admin/addusager/addusager-routing.module';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    AddprofilsalariesRoutingModule,
    AddprofilsalariesModule,
    AddusagerModule,
    AddusagerRoutingModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
