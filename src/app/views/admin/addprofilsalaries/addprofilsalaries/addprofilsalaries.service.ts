import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AddprofilsalariesService {

  constructor(
    private httpClient: HttpClient ,  private cookieService: CookieService ,
  ) { }


  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }).set('Authorization',  `Bearer ${this.cookieService.get("token")}`) ,
  };

    // POST

    AddProfilSalarie(data: any): Promise<any> {
      const request = this.httpClient.post<any>(
        environment.BackendUrl + 'profilSalaire/add',
        JSON.stringify(data),
        this.httpOptions
      );
      return request.toPromise();
    }

        //get
    GeProfilSalarie(): Promise<[any]> {
      const request = this.httpClient.get<any>(
        environment.BackendUrl + 'profilSalaire/list' ,
        this.httpOptions
      );
      return request.toPromise();
    }
    
}
