import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlankserviceService {

  constructor(private _HttpClient:HttpClient) {} ;

  addNote(data:any):Observable<any>
  {
    return this._HttpClient.post(`https://note-sigma-black.vercel.app/api/v1/notes`,data,{headers:{token:'3b8ny__'+localStorage.getItem('userToken')}})
  }
  getNotes():Observable<any>
  {
    return this._HttpClient.get(`https://note-sigma-black.vercel.app/api/v1/notes`,{headers:{token:'3b8ny__'+localStorage.getItem('userToken')}})
  }
  deleteNotes(id:string):Observable<any>
  {
    return this._HttpClient.delete(`https://note-sigma-black.vercel.app/api/v1/notes/${id}`,{headers:{token:'3b8ny__'+localStorage.getItem('userToken')}})
  }
  getUserNotes():Observable<any>
  {
    return this._HttpClient.get(`https://note-sigma-black.vercel.app/api/v1/notes`,{headers:{token:'3b8ny__'+localStorage.getItem('userToken')}})
  }
  updateNote(id:string,data:any):Observable<any>
  {
    return this._HttpClient.put(`https://note-sigma-black.vercel.app/api/v1/notes/${id}`,data,{headers:{token:'3b8ny__'+localStorage.getItem('userToken')}})
  }
}
