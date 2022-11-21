import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionGuard } from '@core/guards/session.guard';
import { HomePageComponent } from '@modules/home/pages/home-page/home-page.component';

/**
 * DECLARACIÓN DE LAS RUTAS:
 * * Carga perezosa: se utiliza para evitar la carga innecesaria de módulos
 * * al momento de entrar a la ruta y se implementa mediante el uso de: 
 * 
 * * loadChildren: () => import('ruta_del_módulo').then(m => m.Módulo)
 * 
   const routes: Routes = [
    {
      path: '', // TODO: http://localhost:4200/
      loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
    }
  ];

* * De esta manera, solo se carga el módulo necesario y a su vez, el módulo hijo
* * cargará sus propias rutas las cuales se enlazan con los componentes
 */
const routes: Routes = [
  {
    path: 'auth',
    // los módulos que se integran aquí deben contener rutas
    // para que todas estas se relacionen como padre - hijo
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '',
    component: HomePageComponent,
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
    canActivate: [SessionGuard] //la propiedad canActivate permite gestionar los permisos al acceder a una ruta
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
