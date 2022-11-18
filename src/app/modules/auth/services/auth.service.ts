import { Injectable } from '@angular/core';

/**
 * @Injectable({}) -> Este decorador marca una clase
 * como disponible para ser proveída e inyectada
 * como una dependencia dentro de otra clase
 */
@Injectable({
    providedIn: 'root' // Donde será proveída
})
export class AuthService {
    constructor() {}

    sendCredentials(email: string, password: string): void {
        console.log('data: ', email, password)
    }
}