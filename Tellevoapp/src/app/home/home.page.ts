import { Component , OnInit} from '@angular/core';
import {Storage} from '@capacitor/storage';
import {Router} from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router: Router,public alertController: AlertController) { }

  ngOnInit() {
  }
  
  btnvolver() 
  {
    
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
            console.log('usuario a confirmado volver al login'),this.router.navigate(['/login']);
          }
        }
      ]
    });

    Storage.clear();
    Storage.remove({key:'usuario'});
    
    await mialerta.present();

    
  };
}
