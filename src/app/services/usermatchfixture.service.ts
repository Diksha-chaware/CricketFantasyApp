import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsermatchfixturesService {
  [x: string]: any;
  public baseurl = "http://localhost:8081/user/usermatchfixture"

  constructor(private http:HttpClient) { }

  showallmatchfixtures(){
    return this.http.get(`${this.baseurl}/`)
  }

  getmatchfixturebyid(id:any){
    return this.http.get(`${this.baseurl}/${id}`)
  }


  getPointsData():Observable<any>{
 return this.http.get<any>(`${this.baseurl}/matchpoint`,{
  responseType:'text' as 'json',
 })
  }


}