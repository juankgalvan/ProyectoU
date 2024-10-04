import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from  '@ionic/angular';
import { Router } from '@angular/router';
import { iConta } from '../../../models/reqConta.interface';
import {ApiServiceService} from '../../service/api-service.service'
import { HttpClient, HttpClientModule } from '@angular/common/http'

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss'],
  providers:[ApiServiceService],
  imports:[IonicModule,ReactiveFormsModule, HttpClientModule],
  standalone:true,
})
export class ContactoComponent  implements OnInit {

  frmConta:FormGroup;

  constructor(private router: Router, private api:ApiServiceService) {
    this.frmConta= new FormGroup({
      nombre: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),
      texto: new FormControl('',Validators.required),
    })
   }

  h() {
    this.router.navigate(['./home']);
  }
  reg() {
    this.router.navigate(['./registro']);
  }
  log() {
    this.router.navigate(['./log']);
  }
  

  ngOnInit() {
    
  }

  formulario(data:iConta){
    this.api.conta(data).subscribe(retorno=>{
      console.log(retorno)
    })
  }
}
