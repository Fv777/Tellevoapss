import { Component, OnInit } from '@angular/core';
import { ApiTestService } from '../servicios/api.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-modpw',
  templateUrl: './modpw.page.html',
  styleUrls: ['./modpw.page.scss'],
})
export class ModpwPage implements OnInit {
  
  modificarpassword:any={

    correo: "",
    password: "",
    token:"1000300170",
  }

  constructor(private router : Router, private apiTest: ApiTestService) { }

  ngOnInit() {
  }  


  modificarPassword()
  {
    this.apiTest.modificarPassword({"correo":this.modificarpassword.correo,"password":this.modificarpassword.password,"token_equipo":this.modificarpassword.token}).subscribe((resultado)=>{
      console.log(resultado)
    })
  }  

}
  
  