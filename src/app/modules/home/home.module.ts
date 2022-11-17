import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { HomeRoutingModule } from './home-routing.module';

import { SharedModule } from '@shared/shared.module';

/**
 * @NgModule -> marca una clase como un NgModule y
 * provee los metadatos de configuración
 */

@NgModule({
    declarations: [
        HomePageComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        SharedModule
    ]
})

export class HomeModule { }