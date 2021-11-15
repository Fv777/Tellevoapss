import { Component, OnInit } from '@angular/core';
import {Router, NavigationExtras} from '@angular/router'; 
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import {Storage} from '@capacitor/storage';
import { ApiTestService } from '../servicios/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario:any={  //variable
    Usuario: "",
    Password: "",
      
  } 
  

  campoError:string = "";

  constructor(private router: Router ,public toastController: ToastController ,public alertController: AlertController, private apiTest: ApiTestService) {

   }

  ngOnInit() {
  }

  loginusuario:any={ //modelo

    correo: "",
    password: "",
    token:"1000300170",
  }

  loginUsuario()
  {
    console.log( this.loginusuario.correo + " " + this.loginusuario.password + " " + this.loginusuario.token);
    this.apiTest.loginUsuario({"correo":this.loginusuario.correo,"password":this.loginusuario.password,"token_equipo":this.loginusuario.token}).subscribe((resultado)=>{
      console.log(resultado);
    })
  }


  btninisesion()   //boton de iniciar sesion
    
    {
      
      

      if(this.validarModelo(this.usuario))
      {
        this.mensajeToast("Bienvenido " +this.usuario.Usuario)
        this.router.navigate(['/home']) //entrar a la pagina 
        
      }
      else{
        this.mensajeToast("Ingresar tu "+this.campoError)
      }

      var infoJson = JSON.stringify(this.usuario);

      Storage.set({key: 'usuario', value: infoJson});
      Storage.set({key: 'logeado', value: 'ok'});
      
    
    }
 
  btnpassword() //boton recuperar contraseña
  {
    console.log;
    this.router.navigate(['/modpw'])

  }
  
  token(){

    var miJson = JSON.stringify(this.loginusuario);
    Storage.set({key: 'usuario', value: miJson});
  }

  guardarDatosStorage(){
    var miJson = JSON.stringify(this.usuario);
    Storage.set({key: 'usuario', value: miJson});
    console.log("se guadaron los datos del usuario");
  }

  verDatosStorage()
  {

    Storage.get({key: 'usuario'}).then((val) =>{
      var objeto = JSON.parse(val.value);
      console.log(objeto);
    });

  }

  
  

  validarModelo(model:any)
  {
    for(var [key, value] of Object.entries(model))
    {
      console.log(key+" value: "+value);
      if(value== "")
      {
        this.campoError = key;
        return false;

      }

    }
    return true;
    

  }

  async mensajeToast(message:string, duration?:number)
  {
   const toast = await this.toastController.create(
     

    {
      message: message,
      duration: duration?duration:3000

    }
   );

   toast.present()
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

  async mensaje() {
    const mialerta = await this.alertController.create({
      header: 'bienvenido', buttons: [
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



