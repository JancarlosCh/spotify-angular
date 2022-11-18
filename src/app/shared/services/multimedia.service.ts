import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class MultimediaService {
    /**
     * Para instanciar un emitidor de eventos se utiliza:
     * nombre: EventEmitter<tipo> = new EventEmitter<tipo>();
     * 
     * El EventEmitter se utiliza para emitir o escuchar eventos,
     * entre otros.
     */
    callback: EventEmitter<any> = new EventEmitter<any>();
    constructor() {}
}