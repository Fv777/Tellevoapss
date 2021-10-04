import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-crearcuenta',
  templateUrl: './crearcuenta.page.html',
  styleUrls: ['./crearcuenta.page.scss'],
})
export class CrearcuentaPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  btncrear() 
  {
    console.log("autentificacion correcta ");
    this.router.navigate(['/home'])
  }
  btnvolver() 
  {
    console.log;
    this.router.navigate(['/inicio'])
  }
}
