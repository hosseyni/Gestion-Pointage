import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-usagers',
  templateUrl: './usagers.component.html',
  styleUrls: ['./usagers.component.css']
})
export class UsagersComponent implements OnInit {
  @ViewChild('htmlData') htmlData!: ElementRef;

  isShown : Boolean = true;

  USERS = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "email": "sincere@april.biz",
      "phone": "1-770-736-8031 x56442"
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "email": "shanna@melissa.tv",
      "phone": "010-692-6593 x09125"
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "email": "nathan@yesenia.net",
      "phone": "1-463-123-4447",
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "email": "julianne@kory.org",
      "phone": "493-170-9623 x156"
    },
    {
      "id": 5,
      "name": "Chelsey Dietrich",
      "email": "lucio@annie.ca",
      "phone": "(254)954-1289"
    },
    {
      "id": 6,
      "name": "Mrs. Dennis",
      "email": "karley@jasper.info",
      "phone": "1-477-935-8478 x6430"
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }


  openPDF(): void {

    this.isShown = false

    setTimeout(async ()=>{
    let DATA: any = document.getElementById('htmlData');
    
    html2canvas(DATA).then((canvas) => {
      var imgWidth = 210; 
      var pageHeight = 295;  
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;
      
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      var margins = {
        top: 40,
        bottom: 60,
        left: 40,
        width: 522
            };
      var totalPages = 10;
      PDF.setTextColor(0, 0, 0);
      PDF.setFontSize(8);
      let position = 0;
      var str = "Page " + 1 ;
      PDF.setFontSize(10);// optional
      PDF.text(str, 50, PDF.internal.pageSize.height - 10);//key is the interal pageSize function

      PDF.setHeaderFunction

      PDF.addImage(FILEURI, 'PNG', 0, position, imgWidth, imgHeight);
      PDF.save('angular-demo.pdf');
    });

},2);

}

 

}
