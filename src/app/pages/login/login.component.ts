import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from  '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports:[IonicModule,ReactiveFormsModule],
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

  constructor(private router: Router) { 
    this.frmLogin= new FormGroup({
      email: new FormControl('',Validators.required),
      contrasena: new FormControl('',Validators.required),
    })
   }
  

  ngOnInit() {}


  formulario(){
    console.log("Usuario ingreso ",this.frmLogin.value)
  }
}
