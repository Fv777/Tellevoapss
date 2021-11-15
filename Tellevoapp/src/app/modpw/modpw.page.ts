import { Component, OnInit } from '@angular/core';
import { ApiTestService } from '../servicios/api.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-modpw',
  templateUrl: './modpw.page.html',
  styleUrls: ['./modpw.page.scss'],
})
export class ModpwPage implements OnInit {
  
  modificar:any={

    correo: "",
    nueva_password: "",
    token:"1000300170",
  }

  constructor(private router : Router, private apiTest: ApiTestService) { }

  ngOnInit() {
  }  


  cambiarpassword()
  {
    this.apiTest.modificarPassword({"correo":this.modificar.correo,
    "nueva_password":this.modificar.nueva_password,"token_equipo":this.modificar.token}).subscribe((resultado)=>{
      console.log(resultado)
    })
  }  

}
  
  