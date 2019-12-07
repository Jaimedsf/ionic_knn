import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'zung', loadChildren: './zung/zung.module#ZungPageModule' },
  { path: 'sobre', loadChildren: './sobre/sobre.module#SobrePageModule' },
  { path: 'questionario', loadChildren: './questionario/questionario.module#QuestionarioPageModule' },
  { path: 'teste-home', loadChildren: './teste-home/teste-home.module#TesteHomePageModule' },
  { path: 'teste', loadChildren: './teste/teste.module#TestePageModule' },
  { path: 'distimia', loadChildren: './distimia/distimia.module#DistimiaPageModule' },
  { path: 'distancias-euclidianas', loadChildren: './distancias-euclidianas/distancias-euclidianas.module#DistanciasEuclidianasPageModule' },
  { path: 'resultado', loadChildren: './resultado/resultado.module#ResultadoPageModule' },
  { path: 'teste-depressao', loadChildren: './teste-depressao/teste-depressao.module#TesteDepressaoPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
