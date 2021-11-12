import { Component, OnInit } from '@angular/core';
import { ApiTestService } from '../servicios/api.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
})
export class PasswordPage implements OnInit {

  constructor(private apiTest: ApiTestService) { }

  ngOnInit() {
  }

  obtenerUsuarios()
  {

    this.apiTest.getUsuarios().subscribe((resultado) =>{
      console.log(resultado);

    })
  }  

  crearMiUsuario()
  { 
    this.apiTest.crearUsuario({"nombre":"probando","apellidos":"probando","correo":"probandogmail.com","password":"123","token_equipo":"1000300170" }).subscribe((res)=>{
      console.log(res);
    })
  }
  

  loginUsuario()
  {
    this.apiTest.loginUsuario({"nombre":"probando","correo":"probandogmail.com","password":"123","token_equipo":"11000300170"}).subscribe((res)=>{
      console.log(res);
    })
  }

  modificarPassword()
  {
    this.apiTest.modificarPassword({"correo":"probandogmail.com","password":"123","token_equipo":"1000300170"}).subscribe((res)=>{
      console.log(res);
    })
  }
  

}
