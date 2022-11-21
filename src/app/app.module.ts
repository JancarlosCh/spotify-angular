import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TokenInjectionInterceptor } from '@core/interceptors/token-injection.interceptor';
import { CookieService } from 'ngx-cookie-service';

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
    AppRoutingModule,
    HttpClientModule, // módulo para realizar peticiones
  ],
  providers: [
    CookieService, // el módulo de manejo de cookies se declara como proveedor
    {
      provide: HTTP_INTERCEPTORS, // Se especifica el uso de un interceptor
      useClass: TokenInjectionInterceptor, // se especifica la clase del interceptor
      multi: true // Se especifica que se pueden utilizar más interceptores si es el caso
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
