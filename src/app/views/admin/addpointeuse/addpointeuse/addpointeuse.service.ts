import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddpointeuseService {

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
    /* createAchat(achat ): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`, achat);
  }*/

    AddPointeuse(data: any): Observable<any> {
      const request = this.httpClient.post<any>( environment.BackendUrl + 'pointeuse/add', JSON.stringify(data),
        this.httpOptions
      );
      return request;
    }
}
