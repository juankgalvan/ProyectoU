import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from  '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  imports:[IonicModule,ReactiveFormsModule],
  standalone:true,
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

  constructor(private router: Router) { 
    this.frmRegistro= new FormGroup({
      nombre: new FormControl('',Validators.required),
      apellido: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),
      contrasena: new FormControl('',Validators.required),
      direccion: new FormControl('',Validators.required),
    })
   }
  

  ngOnInit() {}


  formulario(){
    console.log("Registro existoso del usuario",this.frmRegistro.value)
  }
}
