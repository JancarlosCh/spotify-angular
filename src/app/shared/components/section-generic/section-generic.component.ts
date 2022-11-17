import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.models';

@Component({
    selector: 'app-section-generic',
    templateUrl: './section-generic.component.html',
    styleUrls: ['./section-generic.component.css']
})

export class SectionGenericComponent implements OnInit {
    // @Input() variable: tipo = ''; -> se utiliza para recibir datos del componente padre
    @Input() title: string = '';

    // mode: 'big' | 'small' = 'big' -> permitir solo los valores especificados y asignación por defecto
    @Input() mode: 'big' | 'small' = 'big';
    @Input() dataTracks: Array<TrackModel> = [];

    constructor() { }
    ngOnInit(): void { }
}