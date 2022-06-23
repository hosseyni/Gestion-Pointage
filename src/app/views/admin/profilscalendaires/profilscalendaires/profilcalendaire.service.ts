import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
import { ProfilCalendaireModel } from '../profilcalandaireModel';

@Injectable({
  providedIn: 'root'
})
export class ProfilcalendaireService {

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
    GeProfilCalandaire(): Promise<[ProfilCalendaireModel]> {
      const request = this.httpClient.get<any>(
        environment.BackendUrl + 'profilCalendaire/list' ,
        this.httpOptions
      );
      return request.toPromise();
    }

    //DELETE
    DeleteProfilCalandaire(id: any): Promise<any> {
      const request = this.httpClient.delete<any>(
        environment.BackendUrl + 'profilCalendaire/delete/'+ id,
        this.httpOptions
      );
      return request.toPromise();
    }
}
