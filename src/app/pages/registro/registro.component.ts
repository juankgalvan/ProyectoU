import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from  '@ionic/angular';
import { Router } from '@angular/router';
import {ApiServiceService} from '../../service/api-service.service'
import {iReg} from '../../../models/reqReg.interface'
import { HttpClient, HttpClientModule } from '@angular/common/http'

@Component({
  selector: 'app-registro',
  imports:[IonicModule,ReactiveFormsModule, HttpClientModule],
  standalone:true,
  providers:[ApiServiceService],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent  implements OnInit {

  h() {
    this.router.navigate(['./home']);
  }
  log() {
    this.router.navigate(['./log']);
  }
  conta() {
    this.router.navigate(['./contacto']);
  }

  frmRegistro:FormGroup;

  constructor(private router: Router, private api:ApiServiceService) { 
    this.frmRegistro= new FormGroup({
      nombre: new FormControl('',Validators.required),
      apellido: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),
      contrasena: new FormControl('',Validators.required),
      direccion: new FormControl('',Validators.required),
    })
   }
  

  ngOnInit() {}


  formulario(data:iReg){
    this.api.reg(data).subscribe(retorno=>{
      console.log(retorno)
    })
  }
}
