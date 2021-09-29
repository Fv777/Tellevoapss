import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario:any={
    usuario: "",
    password: ""
  } 

  constructor(private router: Router) { }

  ngOnInit() {
  }

  btninisesion() 
  {
    console.log("autentificacion correcta " + this.usuario.login + " " + this.usuario.password);
    this.router.navigate(['/home'])
    
  }
  btnpassword()
  {
    console.log;
    this.router.navigate(['/recovery-password'])

  }

}
