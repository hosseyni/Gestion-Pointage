import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GestiondepartementModel } from './gestiondepartementModel';

@Injectable({
  providedIn: 'root'
})
export class GestiondepartementService {

 
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
    GeDepartement(): Promise<[GestiondepartementModel]> {
      const request = this.httpClient.get<any>(
        environment.BackendUrl + 'company/list' ,
        this.httpOptions
      );
      return request.toPromise();
    }

    //DELETE
    DeleteDepartement(id: number): Observable<any> {
      const request = this.httpClient.delete<any>(
        environment.BackendUrl + 'company/delete/'+ id,
        this.httpOptions
      );
      return request;
    }

     //Put
     UpdateDepartement(data: any , id : number): Promise<any> {
      const request = this.httpClient.put<any>(
        environment.BackendUrl + 'company/update/'+ id,
        JSON.stringify(data),
        this.httpOptions
      );
      return request.toPromise();
    }

}
