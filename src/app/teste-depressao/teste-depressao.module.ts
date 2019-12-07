import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TesteDepressaoPage } from './teste-depressao.page';

const routes: Routes = [
  {
    path: '',
    component: TesteDepressaoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TesteDepressaoPage]
})
export class TesteDepressaoPageModule {}
