import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  /**
   * TODO: declarations -> se especifican los componentes, directivas, pipes
   * TODO: y declaraciones a utilizar en este módulo
   */
  declarations: [
    AppComponent
  ],
  //TODO: imports -> se especifican los módulos a utilizar
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
