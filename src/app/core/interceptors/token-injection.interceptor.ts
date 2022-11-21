import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
    providedIn: 'root'
})

export class TokenInjectionInterceptor implements HttpInterceptor{
    
    constructor(private cookie: CookieService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        try {

            let newRequest = request;

            // .clone({}) -> nos permite clonar un request y agregarle nuevas propiedades
            newRequest = request.clone({
                setHeaders: {
                    authorization: `Bearer ${this.cookie.get('token')}`
                }
            })

            return next.handle(newRequest)
        } catch (error) {
            console.log(error)
            return next.handle(request)
        }
    }
}