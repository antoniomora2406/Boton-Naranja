import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'recuperar-con',
    loadChildren: () => import('./recuperar-con/recuperar-con.module').then( m => m.RecuperarConPageModule)
  },
  {
    path: 'pdw-new',
    loadChildren: () => import('./pdw-new/pdw-new.module').then( m => m.PdwNewPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'formulario-reg',
    loadChildren: () => import('./formulario-reg/formulario-reg.module').then( m => m.FormularioRegPageModule)
  },
  {
    path: 'ine',
    loadChildren: () => import('./ine/ine.module').then( m => m.INEPageModule)
  },
  {
    path: 'face',
    loadChildren: () => import('./face/face.module').then( m => m.FacePageModule)
  },
  {
    path: 'botones',
    loadChildren: () => import('./botones/botones.module').then( m => m.BotonesPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'code-validation',
    loadChildren: () => import('./code-validation/code-validation.module').then( m => m.CodeValidationPageModule)
  },
  {
    path: 'mapa',
    loadChildren: () => import('./mapa/mapa.module').then( m => m.MapaPageModule)
  },
  {
    path: 'registro-menor',
    loadChildren: () => import('./registro-menor/registro-menor.module').then( m => m.RegistroMenorPageModule)
  },
  {
    path: 'finaliza-registro',
    loadChildren: () => import('./finaliza-registro/finaliza-registro.module').then( m => m.FinalizaRegistroPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
