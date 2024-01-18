import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
import { ProfilCalendaireModel } from '../../profilscalendaires/profilcalandaireModel';

@Injectable({
  providedIn: 'root'
})
export class SalaireCalendaireService {

  constructor(
    private httpClient: HttpClient ,  private cookieService: CookieService ,
  ) { }

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }).set('Authorization',  `Bearer ${this.cookieService.get("token")}`) ,
  };

        //get
        GetSalaireCalandaire(): Promise<[ProfilCalendaireModel]> {
            const request = this.httpClient.get<any>(
              environment.BackendUrl + 'salaireCalendaire/list' ,
              this.httpOptions
            );
            return request.toPromise();
          }


  }