import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { ilogin } from '../../models/reqLog.interface';
import { irespLogin } from '../../models/resLog.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  host:string='http://localhost:4250'

  constructor(private http:HttpClient) { }

  login(datos:ilogin):Observable<irespLogin> {

    let url=`${this.host}/user/login`
    return this.http.post<irespLogin>(url, datos)
  }
}
