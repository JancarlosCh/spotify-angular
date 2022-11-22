import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.models';

@Component({
    selector: 'app-play-list-body',
    templateUrl: './play-list-body.component.html',
    styleUrls: ['./play-list-body.component.css']
})

export class PlayListBodyComponent implements OnInit {
    optionSort: {
        property: any,
        order: string
    } = { property: null, order: 'asc' }

    @Input() tracks: Array<TrackModel> = [];

    constructor() { }
    
    ngOnInit(): void {

    }

    changeSort(property: string): void {
        const { order } = this.optionSort;

        // cambiar la propiedad a ordenar e invertir el orden
        this.optionSort = {
            property,
            order: order === 'asc' ? 'desc' : 'asc'
        }
    }
}