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
    this.apiTest.crearUsuario("fabian", "villalobos", "medina", "test@profesor.duoc.cl", "1234", "1000300170").subscribe((res)=>{
      console.log(res);
    })
  }

}
