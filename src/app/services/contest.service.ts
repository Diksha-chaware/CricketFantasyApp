import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContestService {
  public baseurl = "http://localhost:8081/user/contest"

  constructor(private http:HttpClient) { }

  showallcontests(){
    return this.http.get(`${this.baseurl}/`)
  }

  getcontestbyid(id:any){
    return this.http.get(`${this.baseurl}/${id}`)
  }

}
