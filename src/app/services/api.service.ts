import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()

export class ApiService {

  constructor() { }

  public baseUrl = environment.BackendUrl;
  public login = this.baseUrl + '/auth/login';
}
