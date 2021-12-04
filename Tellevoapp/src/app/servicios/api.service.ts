import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class ApiTestService{


  apiBase = 'https://emprende.asistenciataller.cl/API/v2/';
  

  constructor(private http:HttpClient) { }


getUsuarios(): Observable<any>
{  
  return this.http.get(this.apiBase+"usuarios/1000300170").pipe();

}

crearUsuario(datos)
{
  return this.http.post(this.apiBase+ 'crearUsuario',datos).pipe();

}

loginUsuario(datos)
{
  return this.http.post(this.apiBase+ 'loginUsuario',datos).pipe();

}
  
modificarPassword(datos)
{
  return this.http.post(this.apiBase+ 'modificarPassword',datos).pipe();

}

crearViaje(datos) {

  return this.http.post(this.apiBase + 'crearViaje', datos).pipe();

}  

obtenerViajescreados(): Observable<any> {
  return this.http.get(this.apiBase + 'obtenerViajes/1000300170').pipe();

}
reservaViaje(reserva) {
  return this.http.post(this.apiBase + 'enviarCorreoReserva', reserva).pipe();
}  

}