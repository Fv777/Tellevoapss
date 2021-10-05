import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'; 
import {MatCardModule} from '@angular/material/card';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario:any={  //variable
    Usuario: "",
    Password: ""
  } 

  campoError:string = "";

  constructor(private router: Router ,
    public toastController: ToastController) { }
  

  ngOnInit() {
  }

  btninisesion()   //boton de inicio 
    {
      if(this.validarModelo(this.usuario))
      {
        this.mensajeToast("Bienvenido " +this.usuario.Usuario)
        this.router.navigate(['/home']) //entrar a la pagina 
        
       
      }
      else{
        this.mensajeToast("Ingresar tu "+this.campoError)
      }
    
    
  }
 

 
  btnpassword()
  {
    console.log;
    this.router.navigate(['/recovery-password'])

  }
  btnvolver() 
  {
    console.log;
    this.router.navigate(['/inicio'])
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

   toast.present();
  
    
  }  
}
