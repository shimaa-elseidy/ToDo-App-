import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _HttpClient =inject(HttpClient);

  registerForm(data:any):Observable<any>
  {
    return this._HttpClient.post('https://note-sigma-black.vercel.app/api/v1/users/signUp',data)
  }
  signin(data:any):Observable<any>
  {
    return this._HttpClient.post('https://note-sigma-black.vercel.app/api/v1/users/signIn',data)
  }

}
