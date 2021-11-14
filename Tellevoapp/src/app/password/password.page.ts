import { Component, OnInit } from '@angular/core';
import { ApiTestService } from '../servicios/api.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
})
export class PasswordPage implements OnInit {


  loginusuario:any={

    correo: "",
    password: "",
    token:"1000300170",
  }


  

  constructor(private router : Router, private apiTest: ApiTestService) { }

  ngOnInit() {
  }

  obtenerUsuarios()
  {

    this.apiTest.getUsuarios().subscribe((resultado) =>{
      console.log(resultado);

    })
  }  

  loginUsuario()
  {
    console.log( this.loginusuario.correo + " " + this.loginusuario.password + " " + this.loginusuario.token);
    this.apiTest.loginUsuario({"correo":this.loginusuario.correo,"password":this.loginusuario.password,"token_equipo":this.loginusuario.token}).subscribe((resultado)=>{
      console.log(resultado);
    })
  }

 

  


  

}
