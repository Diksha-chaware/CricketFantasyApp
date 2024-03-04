import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  // currentUser:any;
public baseurl = "http://localhost:8081/user"
  constructor(private http:HttpClient) { }
  
  registeruser(user:any){
    return this.http.post(`${this.baseurl}/`,user)
  }

  loginuser(user:any){
    return this.http.post(`${this.baseurl}/login`,user)
  }
}
