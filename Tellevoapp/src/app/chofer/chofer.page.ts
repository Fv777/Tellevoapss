import { Component, OnInit } from '@angular/core';
import {Router, NavigationExtras} from '@angular/router'; 
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import {Storage} from '@capacitor/storage';
import { ApiTestService } from '../servicios/api.service';

@Component({
  selector: 'app-chofer',
  templateUrl: './chofer.page.html',
  styleUrls: ['./chofer.page.scss'],
})

export class ChoferPage implements OnInit {

  user = '';
  viaje: any = {
    horario: '',
    costo: '',
    destino: '',
    token: "1000300170"
  };



  constructor(private router: Router ,public toastController: ToastController ,public alertController: AlertController, private apiTest: ApiTestService) {

  }

  ngOnInit() {
  }

  

  crearViaje() {
    
      var viaje = {
        horario_salida: this.viaje.horario, costo_por_persona: this.viaje.costo,
        lugar_destino: this.viaje.destino, token_equipo: this.viaje.token
      };
      this.apiTest.crearViaje(viaje).subscribe((res) => {
        console.log(res);
        var result = JSON.stringify(res);
        var respuesta = JSON.parse(result);
        console.log(result);
        console.log(respuesta);
        this.mensajeToast("El viaje se ha registrado");
      
      });
      
  

    
  };

  async mensajeToast(message:string, duration?:number)
  {
    const toast = await this.toastController.create(
      {
        message :message,
        duration: duration?duration:3000
       }
    );

    toast.present();
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
            console.log('usuario a confirmado volver al inicio'),this.router.navigate(['/home']);
          }
        }
      ]
    });
    
    await mialerta.present();

    
  };
  

}
