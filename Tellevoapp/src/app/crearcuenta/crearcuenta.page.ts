import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-crearcuenta',
  templateUrl: './crearcuenta.page.html',
  styleUrls: ['./crearcuenta.page.scss'],
})
export class CrearcuentaPage implements OnInit {

  constructor(private router: Router,public alertController: AlertController) { }

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
