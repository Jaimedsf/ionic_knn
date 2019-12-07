import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DistanciasEuclidianasPage } from './distancias-euclidianas.page';

const routes: Routes = [
  {
    path: '',
    component: DistanciasEuclidianasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DistanciasEuclidianasPage]
})
export class DistanciasEuclidianasPageModule {}
