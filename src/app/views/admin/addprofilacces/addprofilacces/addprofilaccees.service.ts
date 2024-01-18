import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddprofilacceesService {

  constructor(
    private httpClient: HttpClient ,  private cookieService: CookieService ,
  ) { }

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }).set('Authorization',  `Bearer ${this.cookieService.get("token")}`) ,
  };



       //Put
       UpdateGeProfilAcces(data: any , id : number): Promise<any> {
        const request = this.httpClient.put<any>(
          environment.BackendUrl + 'pControleAccess/update/'+ id,
          JSON.stringify(data),
          this.httpOptions
        );
        return request.toPromise();
      }




    // POST

    AddProfile(data: any): Promise<any> {
      console.log('profiiiiiiiiiil ++++++++++  ', JSON.stringify(data));

      
      const request = this.httpClient.post<any>(
        environment.BackendUrl + 'pControleAccess/add',
        JSON.stringify(data),
        this.httpOptions
      );
      return request.toPromise();
    }


    // get
    getProfileByID(data: any): Promise<any> {
      console.log('profiiiiiiiiiil ++++++++++  ', JSON.stringify(data));

      
      const request = this.httpClient.get<any>(
        environment.BackendUrl + 'pControleAccess/add'
      );
      return request.toPromise();
    }

  }