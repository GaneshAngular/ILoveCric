import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import API from '../../constants/api.constant';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService:HttpService) { }

  signin(data:any){
    return this.httpService.post(API.signin,data)
  }
  signup(data:any){
    return this.httpService.post(API.signup,data)
  }

}
