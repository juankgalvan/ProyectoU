import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { ilogin } from '../../models/reqLog.interface';
import { irespLogin } from '../../models/resLog.interface';
import { Observable } from 'rxjs';
import { irespReg } from '../../models/resReg.interface';
import { iReg } from '../../models/reqReg.interface';
import { iConta } from '../../models/reqConta.interface';
import { irespConta } from '../../models/resConta.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  host:string='http://localhost:3200'

  constructor(private http:HttpClient) { }

  login(datos:ilogin):Observable<irespLogin> {

    let url=`${this.host}/login`
    return this.http.post<irespLogin>(url, datos)
  }

  reg(datos:iReg):Observable<irespReg> {

    let url=`${this.host}/create`
    return this.http.post<irespReg>(url, datos)
  }

  conta(datos:iConta):Observable<irespConta> {

    let url=`${this.host}/contacto`
    return this.http.post<irespConta>(url, datos)
  }
}
