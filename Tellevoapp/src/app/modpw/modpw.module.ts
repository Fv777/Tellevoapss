import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModpwPageRoutingModule } from './modpw-routing.module';

import { ModpwPage } from './modpw.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModpwPageRoutingModule
  ],
  declarations: [ModpwPage]
})
export class ModpwPageModule {}
