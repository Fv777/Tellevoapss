import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Storage } from '@capacitor/storage';
import { ApiTestService } from '../servicios/api.service';;
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-pasajero',
  templateUrl: './pasajero.page.html',
  styleUrls: ['./pasajero.page.scss'],
})
export class PasajeroPage implements OnInit {
  viajes: any = [];
  usuario: '';
  nombre: '';
  correo: '';
  apellido: '';

  token: any = {
    tok: '1000300170'
  };

  constructor(private router: Router ,public toastController: ToastController ,public alertController: AlertController, private apiTest: ApiTestService) {
}

  ngOnInit() {
  

  this.apiTest.obtenerViajescreados().subscribe((respuesta) => {
    console.log("result",respuesta.result);
    return this.viajes = respuesta.result;
  });

 }

 ReservarViajes() {
  Storage.get({ key: "datos" }).then((val) => {
    var objeto = JSON.parse(val.value)
    this.usuario = objeto.nombre + objeto.apellidos;
    var reserva={nombre:objeto.nombre,correo:objeto.correo,token_equipo:this.token.tok}
    this.apiTest.reservaViaje(reserva).subscribe((res => {
      console.log(res);
      var result = JSON.stringify(res);
      var respuesta = JSON.parse(result);
      this.mensajeToast(respuesta.result);
    }))
  })

}
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
}

}