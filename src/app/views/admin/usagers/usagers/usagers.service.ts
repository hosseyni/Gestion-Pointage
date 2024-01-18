import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable , TemplateRef } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UsagersService {

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
   listUsager(): Promise<any> {
    const request = this.httpClient.get<any>(
      environment.BackendUrl + 'usager/list',
      this.httpOptions
    );
    return request.toPromise();
  }


  }