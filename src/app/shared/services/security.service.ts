import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  loginPath = 'https://fuleo.herokuapp.com/login/web'

  constructor(private readonly http: HttpClient) { }

  login(datosLogin: any) {
    console.log(datosLogin)
    return this.http.post(this.loginPath, datosLogin, { responseType: 'text' });
  }

}
