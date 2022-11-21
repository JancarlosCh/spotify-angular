import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

/**
 * @Injectable({}) -> Este decorador marca una clase
 * como disponible para ser proveída e inyectada
 * como una dependencia dentro de otra clase
 */
@Injectable({
    providedIn: 'root' // Donde será proveída
})

export class AuthService {
    private readonly URL = environment.api;

    constructor(private _http: HttpClient, private cookie: CookieService) {}

    sendCredentials(email: string, password: string): Observable<any> {
        const body = {
            email, 
            password
        }
        return this._http.post(`${this.URL}/auth/login`, body)
        .pipe(
            tap((response: any) => {
                const { tokenSession, data } = response;
                this.cookie.set('token', tokenSession, 4, '/')
            })
        );
    }
}