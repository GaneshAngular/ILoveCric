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

  googleSignIn(data:any){
    return this.httpService.post(API.googleSignin,data)

  }

  getProfile(){
    return this.httpService.get(API.profile)
  }
  updateProfileImage(data:any){
    return this.httpService.put(API.profile,data)
  }

  updateProfile(data:any){
    return this.httpService.put(API.user,data)

  }

}
