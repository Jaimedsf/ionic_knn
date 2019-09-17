import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SinaisSintomasPage } from './sinais-sintomas.page';

const routes: Routes = [
  {
    path: '',
    component: SinaisSintomasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SinaisSintomasPage]
})
export class SinaisSintomasPageModule {}
