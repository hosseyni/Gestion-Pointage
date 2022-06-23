import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
import { handKeyModel } from '../handkeysModel';

@Injectable({
  providedIn: 'root'
})
export class HandkeysService {

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
    AddPointeuse(data: any): Promise<any> {
      const request = this.httpClient.post<any>(
        environment.BackendUrl + 'pointeuse/add',
        JSON.stringify(data),
        this.httpOptions
      );
      return request.toPromise();
    }

   //DELETE
    DeletePointeuse(id: any): Promise<any> {
      const request = this.httpClient.delete<any>(
        environment.BackendUrl + 'pointeuse/delete/'+ id,
        this.httpOptions
      );
      return request.toPromise();
    }

    //get
    GetPointeuse(): Promise<[handKeyModel]> {
      const request = this.httpClient.get<any>(
        environment.BackendUrl + 'pointeuse/list' ,
        this.httpOptions
      );
      return request.toPromise();
    }

         //Put
         UpdatePointeuse(data: any , id : number): Promise<any> {
          const request = this.httpClient.put<any>(
            environment.BackendUrl + 'pointeuse/update/'+ id,
            JSON.stringify(data),
            this.httpOptions
          );
          return request.toPromise();
        }
}
