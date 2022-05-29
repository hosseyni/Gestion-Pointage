import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-addusager',
  templateUrl: './addusager.component.html',
  styleUrls: ['./addusager.component.css']
})
export class AddusagerComponent implements OnInit {

  Events: any[] =  [
    {'title' : 'Absence injustifié', 'start': '2022-05-01' , 'end': '2022-05-01',  color: 'violet'},
    {'title' : 'a 11:00:00', 'start': '2022-05-01 11:00' , 'end': '2022-05-01 11:00',  color: 'bleu'},
    {'title' : 'a 11:00:00', 'start': '2022-05-01 11:00' , 'end': '2022-05-01 11:00',  color: 'orange'},
    {'title' : 'maladie', 'start' : '2022-05-03' , 'end': '2022-05-09 08:00', color: 'red'},
    {'title' : 'maladie', 'start' : '2022-05-09' , 'end': '2022-05-16', color: 'yellow'},
    {'title' : 'Annomallie de pointage', 'start' : '2022-05-17' , 'end': '2022-05-17', color: 'red'},
    {'title' : 'maladie', 'start' : '2022-06-02' , 'end': '2022-06-06', color: 'bleu'},

    {'title' :  "Congé", "start": "2022-05-03 09:00:00","end": "2022-05-03 10:00:00" ,  color: 'pink'},
    { 'title' : "Pressure Equipment Safety Legislation Seminar", "start": "2022-05-27 08:00", "end": "2022-05 17:00"},
    {'title' : "Pressure Equipment Safety Legislation Seminar","start": "2022-05 08:00","end": "2022-05 17:00"}
];

  viewDate: Date = new Date();
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth'
  };
  constructor() { }

  ngOnInit(): void {
    this.calendarOptions.events = this.Events;
  }

  handleDateClick(arg: any) {
    alert('date click! ' + arg.dateStr)
  }
  openPDF(): void {


    let DATA: any = document.getElementById('htmlDataCalender');
    
    html2canvas(DATA).then((canvas) => {

      var imgWidth = 180; ;  
      var imgHeight = canvas.height * imgWidth / canvas.width;

   
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');

      PDF.setTextColor(0, 0, 0);
      let position = 0;
      PDF.setFontSize(10);// optional
    

      PDF.text('Leeds Engineering', 11, 8);
      PDF.text('biotime-Tchnology', 170, 8);
      PDF.setFontSize(30);
      PDF.setTextColor(0, 0, 0);

      PDF.text('Planning des usagers de Leeds ', 105, 30 , {align: "center"});
      PDF.text(' Engineering', 108, 45 , {align: "center"});
      PDF.setHeaderFunction

      PDF.addImage(FILEURI, 'PNG', 15, 60, imgWidth, imgHeight);
      PDF.save('angular-demo.pdf');
    });


}
}
