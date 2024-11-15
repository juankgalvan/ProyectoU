import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';
import { IonicModule, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ApiServiceService } from '../../service/api-service.service';
import { iReg } from '../../../models/reqReg.interface';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-registro',
  imports: [IonicModule, ReactiveFormsModule, HttpClientModule],
  standalone: true,
  providers: [ApiServiceService],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {

  frmRegistro: FormGroup;

  constructor(
    private router: Router,
    private api: ApiServiceService,
    private alertController: AlertController
  ) {
    this.frmRegistro = new FormGroup({
      nombre: new FormControl('', Validators.required),
      edad: new FormControl('0', [Validators.required, this.integerValidator]),
      email: new FormControl('', Validators.required),
      contrasena: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {}
  
  h() {
    this.router.navigate(['./home']);
  }
  
  log() {
    this.router.navigate(['./login']);
  }
  
  conta() {
    this.router.navigate(['./contacto']);
  }

  // Validador personalizado para verificar que "edad" sea un número entero positivo
  integerValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (!Number.isInteger(+value) || +value <= 0) {
      return { notInteger: true };
    }
    return null;
  }

  async formulario(data: iReg) {
    if (this.frmRegistro.invalid) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Por favor, complete todos los campos correctamente.',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    this.api.reg(data).subscribe(async retorno => {
      console.log(retorno);

      const alert = await this.alertController.create({
        header: 'Registro Exitoso',
        message: 'El usuario ha sido registrado correctamente.',
        buttons: ['OK']
      });

      await alert.present();
    });
  }
}
