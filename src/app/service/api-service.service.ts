import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  host:string='http://localhost:4250'

  constructor(private http:HttpClient) { }

  login(){
    let url=`${this.host}/user/login`
    
  }
}
