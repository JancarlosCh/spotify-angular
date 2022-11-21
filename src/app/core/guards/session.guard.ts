import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs'

@Injectable({
    providedIn: 'root'
})

export class SessionGuard implements CanActivate {

    constructor(private cookie: CookieService, private router: Router) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.checkCookieSession();
    }

    checkCookieSession(): boolean {
        try {
            const isLoggedIn = this.cookie.check('token')
            if (!isLoggedIn) {
                this.router.navigate(['/', 'auth'])
                return false;
            }
            return true
        } catch (error) {
            console.log(error)
            return false;
        }
    }
}