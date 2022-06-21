import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddabsenceService {
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

    AddTypeAbsence(data: any): Promise<any> {
      const request = this.httpClient.post<any>(
        environment.BackendUrl + 'typeAbsence/add',
        JSON.stringify(data),
        this.httpOptions
      );
      return request.toPromise();
    }


}
