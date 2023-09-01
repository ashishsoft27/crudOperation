import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceCrudService {

    baseUrl:string="http://localhost:3000/";

    httpHeaders:HttpHeaders=new HttpHeaders({
      'content-type':'application/json'
    })
  constructor(private httpClient:HttpClient) { }

  postDataToServer(endPoint:string,body:any){
    const url=this.baseUrl+endPoint;
    return this.httpClient.post(url,body,{ headers: this.httpHeaders })
  }
  getDataFromServer(endPoint:string){
    const url=this.baseUrl+endPoint;
    return this.httpClient.get(url,{ headers: this.httpHeaders })
  }
}
