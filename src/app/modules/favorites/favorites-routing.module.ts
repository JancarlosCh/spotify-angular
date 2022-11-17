import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesPageComponent } from './pages/favorite-page/favorites-page.component';

/**
 *  {
        path: '',
        component: Componente a renderizar,
        outlet: outlet que gestiona esta ruta
    }
 */
const routes: Routes = [
    {
        path: '',
        component: FavoritesPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class FavoritesRoutingModule { }