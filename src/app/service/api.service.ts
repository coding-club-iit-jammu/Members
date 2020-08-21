import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  baseUri:string = 'http://codingclubiitjmuapis.azurewebsites.net/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) { }
  getMembers() {
    return this.http.get(`${this.baseUri}/members`);
  }
}