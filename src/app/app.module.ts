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
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { FullCalendarModule } from '@fullcalendar/angular';
import { HttpClientModule } from '@angular/common/http';
import { DashboardRoutingModule } from './views/admin/dashboard/dashboard-routing.module';
import { NgbModule , NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';



FullCalendarModule.registerPlugins([
  dayGridPlugin,
  interactionPlugin
]);
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
    DashboardRoutingModule,
    FullCalendarModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    HttpClientModule,
    NgbModule,
    NgbAlertModule

  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
