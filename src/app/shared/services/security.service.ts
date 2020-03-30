import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user.model';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  loginPath = 'https://fuleo.herokuapp.com/login/web'

  constructor(private readonly http: HttpClient) { }

  login(datosLogin: User): Observable<String> {
    console.log(datosLogin)
    // return this.http.post(this.loginPath, datosLogin, { responseType: 'text' }); // llamado real
    return this.http.get('http://localhost:3000/login', {responseType: 'text'}); // fake call to json-server back
  }

}
