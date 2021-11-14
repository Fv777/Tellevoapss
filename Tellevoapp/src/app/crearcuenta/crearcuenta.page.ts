import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ApiTestService } from '../servicios/api.service';


@Component({
  selector: 'app-crearcuenta',
  templateUrl: './crearcuenta.page.html',
  styleUrls: ['./crearcuenta.page.scss'],
})
export class CrearcuentaPage implements OnInit {

  newusuario:any={

    nombre: "",
    apellidos: "",
    correo: "",
    password: "",
    token: "1000300170",

  }

  

  constructor(private router: Router,public alertController: AlertController,private apiTest: ApiTestService) { }

  

  ngOnInit() {
  }


  btncrear() 
  {
    
    this.apiTest.crearUsuario({"nombre":this.newusuario.nombre,"apellidos":this.newusuario.apellidos,
    "correo":this.newusuario.correo,"password":this.newusuario.password,"token_equipo":this.newusuario.token}).subscribe((resultado)=>{
      console.log(resultado)
    })

  }

  btnvolver() 
  {
    console.log;
    this.router.navigate(['/inicio'])
  }
  async alertaBasica() {
    const mialerta = await this.alertController.create({
      header: 'Deseas volver atras?', buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('usuario se mantiene en el login');
          }
        }, {
          text: 'Confirmar',
          handler: () => {
            console.log('usuario a confirmado volver al inicio'),this.router.navigate(['/inicio']);
          }
        }
      ]
    });
    
    await mialerta.present();

    
  };
}