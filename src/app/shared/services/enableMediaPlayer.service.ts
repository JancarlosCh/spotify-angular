import { Injectable, EventEmitter } from '@angular/core'

@Injectable({
    providedIn: 'root'
})

export class enableMediaPlayerService {
    callback: EventEmitter<any> = new EventEmitter<any>();
    constructor() {}
}