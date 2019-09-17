import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'sinais-sintomas', loadChildren: './sinais-sintomas/sinais-sintomas.module#SinaisSintomasPageModule' },
  { path: 'avaliacao', loadChildren: './avaliacao/avaliacao.module#AvaliacaoPageModule' },
  { path: 'p1', loadChildren: './p1/p1.module#P1PageModule' },
  { path: 'p2', loadChildren: './p2/p2.module#P2PageModule' },
  { path: 'p3', loadChildren: './p3/p3.module#P3PageModule' },
  { path: 'p4', loadChildren: './p4/p4.module#P4PageModule' },
  { path: 'p5', loadChildren: './p5/p5.module#P5PageModule' },
  { path: 'p6', loadChildren: './p6/p6.module#P6PageModule' },
  { path: 'p7', loadChildren: './p7/p7.module#P7PageModule' },
  { path: 'p8', loadChildren: './p8/p8.module#P8PageModule' },
  { path: 'p9', loadChildren: './p9/p9.module#P9PageModule' },
  { path: 'p10', loadChildren: './p10/p10.module#P10PageModule' },
  { path: 'p11', loadChildren: './p11/p11.module#P11PageModule' },
  { path: 'p12', loadChildren: './p12/p12.module#P12PageModule' },
  { path: 'p13', loadChildren: './p13/p13.module#P13PageModule' },
  { path: 'p14', loadChildren: './p14/p14.module#P14PageModule' },
  { path: 'p15', loadChildren: './p15/p15.module#P15PageModule' },
  { path: 'p16', loadChildren: './p16/p16.module#P16PageModule' },
  { path: 'p17', loadChildren: './p17/p17.module#P17PageModule' },
  { path: 'p18', loadChildren: './p18/p18.module#P18PageModule' },
  { path: 'p19', loadChildren: './p19/p19.module#P19PageModule' },
  { path: 'p20', loadChildren: './p20/p20.module#P20PageModule' },
  { path: 'p21', loadChildren: './p21/p21.module#P21PageModule' },
  { path: 'sobre-zung', loadChildren: './sobre-zung/sobre-zung.module#SobreZungPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
