import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable , TemplateRef } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

import { environment } from 'src/environments/environment';

import { TypeAbsenceModel } from './typeAbsenceModel';


@Injectable({
  providedIn: 'root'
})
export class TypeabsenceService {

  
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
    AddAbsence(data:any): Promise<any> {
      const request = this.httpClient.post<any>(
        environment.BackendUrl + 'typeAbsence/add',JSON.stringify(data),
        this.httpOptions
      );
      return request.toPromise();
    }

    // Put
    updateAbsence(data:any): Promise<any> {
      const request = this.httpClient.put<any>(
        environment.BackendUrl + 'typeAbsence/update/'+data.idTypeAbsence,JSON.stringify(data),
        this.httpOptions
      );
      return request.toPromise();
    }
    
 
   //get
    ListAbsence(): Promise<[TypeAbsenceModel]> {
      const request = this.httpClient.get<any>(
        environment.BackendUrl + 'typeAbsence/list',
        this.httpOptions
      );
      return request.toPromise();
    }

        //DELETE
        DeleteAbsence(id: any): Promise<any> {
          const request = this.httpClient.delete<any>(
            environment.BackendUrl + 'typeAbsence/delete/'+ id,
            this.httpOptions
          );
          return request.toPromise();
        }
}
