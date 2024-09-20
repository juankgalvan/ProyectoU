import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from  '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss'],
  imports:[IonicModule,ReactiveFormsModule],
  standalone:true,
})
export class ContactoComponent  implements OnInit {

  frmControles:FormGroup;

  constructor(private router: Router) {
    this.frmControles= new FormGroup({
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

  onSubmitTemplate(){
    console.log(this.frmControles.value)
  }
}
