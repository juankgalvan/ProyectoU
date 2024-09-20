import { Component, OnInit } from '@angular/core';
import { IonicModule } from  '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports:[IonicModule],
  standalone:true,
})
export class HomeComponent  implements OnInit {

  constructor(private router: Router) { }

  log() {
    this.router.navigate(['./login']);
  }

  reg() {
    this.router.navigate(['./registro']);
  }

  conta() {
    this.router.navigate(['./contacto']);
  }

  ngOnInit() {}

}
