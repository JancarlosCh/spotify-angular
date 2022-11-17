import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// aquí se enlazan las rutas con los componentes que serán cargados
const routes: Routes = [
    {
        path: 'tracks',
        loadChildren: () => import('@modules/tracks/tracks.module').then(m => m.TracksModule)
    },
    {
        path: 'favorites',
        loadChildren: () => import('@modules/favorites/favorites.module').then(m => m.FavoritesModule)
    },
    {
        path: 'history',
        loadChildren: () => import('@modules/history/history.module').then(m => m.HistoryModule)
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class HomeRoutingModule { }