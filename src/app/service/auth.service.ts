import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  apiurl = 'http://localhost:300/user';

  GetAll() {
    return this.http.get(this.apiurl);
  }
  GetByCode(code: any) {
    return this.http.get(this.apiurl + '/' + code);
  }
  proceedRegister(inputData: any) {
    return this.http.post(this.apiurl, inputData);
  }

  updateRegister(code: any, inputData: any) {
    return this.http.put(this.apiurl + '/' + code, inputData);
  }
}
