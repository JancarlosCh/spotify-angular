import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services/auth.service';

@Component({
    selector: 'app-login-page',
    templateUrl: 'login-page.component.html',
    styleUrls: ['login-page.component.css']
})

export class LoginPageComponent implements OnInit {

    invalidInputs: boolean = false;

    /**
     * nombre: FormGroup = new FormGroup({}) -> crear un formulario vacío
     * nota: el FormGroup se utiliza como un contenedor donde estarán
     * los inputs de un formulario reactivo.
     */
    loginForm: FormGroup = new FormGroup({});

    // En el constructor se deben inyectar los servicios a usar
    constructor(private _authService: AuthService, private router: Router) { }

    ngOnInit(): void {
        /**
         * Dentro del FormGroup se instancian cada FormControl del formulario:
         * nombreInput: new FormControl('estadoInicial, [Validators.validación])
         * 
         * Una forma básica de validar un campo es haciendo uso de Validators:
         * Validators.required -> define que un campo es requerido
         */
        this.loginForm = new FormGroup({
            // 
            email: new FormControl('', [
                Validators.required,
                Validators.email
            ]),
            password: new FormControl('', [
                Validators.required,
                Validators.minLength(6),
                Validators.maxLength(12),
            ])
        })
    }

    loginRequest(): void {
        const { email, password } = this.loginForm.value;
        this._authService.sendCredentials(email, password)
        .subscribe(() => {
            this.router.navigate(['/', 'tracks'])
        }, error => {
            this.invalidInputs = true;
            console.log(error)
        })
    }
}