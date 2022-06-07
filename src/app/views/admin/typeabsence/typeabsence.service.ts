import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TypeabsenceService {

  constructor(
    private httpClient: HttpClient
  ) { }

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

    // POST
 
   
    ListAbsence(): Promise<any> {
      const request = this.httpClient.get<any>(
        environment.BackendUrl + '/tempspause/list'
      );
      return request.toPromise();
    }
}