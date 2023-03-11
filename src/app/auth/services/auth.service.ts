import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiPaths } from 'src/app/enumAPIs';
import { environment } from 'src/app/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  URL=environment.baseUrl

  constructor(private http:HttpClient) { }

  logIn(data:any){
    let url=`${this.URL}/${ApiPaths.Auth}`;
    return this.http.post(url,data)
  }




  
}
