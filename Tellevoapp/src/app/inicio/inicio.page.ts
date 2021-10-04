import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'; 
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  btnalumno() 
  {
    console.log("autentificacion correcta ");
    this.router.navigate(['/login'])
  }
  btnconductor() {
    console.log("autentificacion correcta ");
    this.router.navigate(['/login'])

  }
  btncuenta()
  {
    console.log;
    this.router.navigate(['/crearcuenta'])
  }
}


  