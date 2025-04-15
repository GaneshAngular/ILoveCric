import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import environment from '../../../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  get(url:string,params?:HttpParams){
     return this.http.get(environment.server_url+url,{params})
  }
  post(url:string,data:any){
     return this.http.post(environment.server_url+url,data)
  }

  delete(url:string,id:string){
    return this.http.delete(environment.server_url+url,{params:new HttpParams().set("id",id)})
  }

  put(url:string,id:string){
    return this.http.put(environment.server_url+url,{params:new HttpParams().set("id",id)})
  }

}
