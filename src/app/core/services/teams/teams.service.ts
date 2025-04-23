import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import API from '../../constants/api.constant';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(private http:HttpService) { }

    createTeam(data:any){
      return this.http.post(API.teams,data)
    }

    getTeams(){
      return this.http.get(API.teams)
    }

    deleteTeam(id:string){
      return this.http.delete(API.teams,id)
    }

    updateTeam(team:any){
      return this.http.put(API.teams,team)
    }
}
