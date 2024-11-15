import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonicModule, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ApiServiceService } from '../../service/api-service.service';
import { ilogin } from '../../../models/reqLog.interface';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  imports: [IonicModule, ReactiveFormsModule, HttpClientModule],
  providers: [ApiServiceService],
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  frmLogin: FormGroup;

  constructor(
    private router: Router,
    private api: ApiServiceService,
    private alertController: AlertController
  ) {
    this.frmLogin = new FormGroup({
      email: new FormControl('', Validators.required),
      contrasena: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {}

  h() {
    this.router.navigate(['./home']);
  }
  
  reg() {
    this.router.navigate(['./registro']);
  }
  
  conta() {
    this.router.navigate(['./contacto']);
  }

 
  async formulario(data: ilogin) {
    this.api.login(data).subscribe(async (retorno) => {
      const alert = await this.alertController.create({
        header: 'Respuesta del Servidor',
        message: retorno.message,  
        buttons: ['OK']
      });
      await alert.present();

      
      if (retorno.message === 'loggin successful') {
        this.router.navigate(['./home']);
      }
    }, async error => {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'No se pudo conectar con el servidor. Intente nuevamente.',
        buttons: ['OK']
      });
      await alert.present();
    });
  }
}
