import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
import { ProfilSalarieModel } from './profilsalariesModel';

@Injectable({
  providedIn: 'root'
})
export class ProfilsalariesService {

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
    GeProfilSalarie(): Promise<[ProfilSalarieModel]> {
      const request = this.httpClient.get<any>(
        environment.BackendUrl + 'profilSalaire/list' ,
        this.httpOptions
      );
      return request.toPromise();
    }

    //DELETE
    DeleteProfilSalarie(id: any): Promise<any> {
      const request = this.httpClient.delete<any>(
        environment.BackendUrl + 'profilSalaire/delete/'+ id,
        this.httpOptions
      );
      return request.toPromise();
    }

}
