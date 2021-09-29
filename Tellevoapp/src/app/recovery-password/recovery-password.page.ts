import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-recovery-password',
  templateUrl: './recovery-password.page.html',
  styleUrls: ['./recovery-password.page.scss'],
})
export class RecoveryPasswordPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  btnrecuperar() 
   {
    console.log("Cuenta recuperada acceso aceptado ");
    this.router.navigate(['/home'])
   }

}
