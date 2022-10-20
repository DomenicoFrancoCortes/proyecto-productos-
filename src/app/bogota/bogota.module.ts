import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BogotaPageRoutingModule } from './bogota-routing.module';

import { BogotaPage } from './bogota.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BogotaPageRoutingModule
  ],
  declarations: [BogotaPage]
})
export class BogotaPageModule {}
