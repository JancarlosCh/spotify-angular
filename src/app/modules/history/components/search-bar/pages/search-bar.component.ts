import { Component, EventEmitter, OnInit, Output } from '@angular/core'

@Component({
    selector: 'app-search-bar',
    templateUrl: 'search-bar.component.html',
    styleUrls: ['search-bar.component.css']
})

export class SearchBarComponent implements OnInit {
    // @Output() -> PEsta propiedad permite enviar datos del componente hijo al componente padre
    @Output() callBackData: EventEmitter<any> = new EventEmitter();

    src: string = '';

    constructor() { }

    ngOnInit(): void { }

    onChange(text: string): void {
        if (text.length >= 3) {
            this.callBackData.emit(text);
        }
    }
}