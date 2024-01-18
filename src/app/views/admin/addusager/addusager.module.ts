import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddusagerComponent } from './addusager/addusager.component';
import { AddusagerRoutingModule } from './addusager-routing.module';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { FullCalendarModule } from '@fullcalendar/angular';
import { FormsModule } from '@angular/forms';
FullCalendarModule.registerPlugins([
  dayGridPlugin,
  interactionPlugin
]);


@NgModule({
  declarations: [
    AddusagerComponent
  ],
  imports: [
    CommonModule,
    AddusagerRoutingModule,
    FormsModule ,
    FullCalendarModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ]
})
export class AddusagerModule { }
