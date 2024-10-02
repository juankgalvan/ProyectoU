import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from  '@ionic/angular';
import { Router } from '@angular/router';
import {ApiServiceService} from '../../service/api-service.service'
import {ilogin} from '../../../models/reqLog.interface'

@Component({
  selector: 'app-login',
  imports:[IonicModule,ReactiveFormsModule],
  providers:[ApiServiceService],
  standalone:true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {

  h() {
    this.router.navigate(['./home']);
  }
  reg() {
    this.router.navigate(['./registro']);
  }
  conta() {
    this.router.navigate(['./contacto']);
  }

  frmLogin:FormGroup;

  constructor(private router: Router, private api:ApiServiceService) { 
    this.frmLogin= new FormGroup({
      email: new FormControl('',Validators.required),
      contrasena: new FormControl('',Validators.required),
    })
   }
  

  ngOnInit() {}


  formulario(data:ilogin){
    console.log("Usuario ingreso ",this.frmLogin.value)
    this.api.login(data).subscribe(retorno=>{
      console.log(retorno)
    })
  }
}
