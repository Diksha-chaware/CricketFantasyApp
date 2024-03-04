import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  [x: string]: any;

  public baseurl = "http://localhost:8080/admin/players"
  constructor(private http:HttpClient) { }
  showallplayers(){
    return this.http.get(`${this.baseurl}/`)
  }

  deleteItem(){
    return this.http.delete(`${this.baseurl}/`)
  }
  }
