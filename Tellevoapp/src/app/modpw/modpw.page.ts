import { Component, OnInit } from '@angular/core';
import { ApiTestService } from '../servicios/api.service';
import { Router, NavigationExtras } from '@angular/router';
import { AlertController } from '@ionic/angular';

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

  constructor(private router : Router, private apiTest: ApiTestService,public alertController: AlertController,) { }

  ngOnInit() {
  }  


  cambiarpassword()
  {
    this.apiTest.modificarPassword({"correo":this.modificar.correo,
    "nueva_password":this.modificar.nueva_password,"token_equipo":this.modificar.token}).subscribe((resultado)=>{
      console.log(resultado)
    })
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
            console.log('usuario a confirmado volver al inicio'),this.router.navigate(['/login']);
          }
        }
      ]
    });
    
    await mialerta.present();

}

}
  