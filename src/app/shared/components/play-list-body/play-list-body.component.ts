import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.models';
import { MultimediaService } from '@shared/services/multimedia.service';

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

    constructor(private _multimediaService: MultimediaService) { }
    
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

    // Función encargada de enviar una canción a otro componente
    sendMultimedia(track: TrackModel): void {
        this._multimediaService.trackInfo$.next(track);
        this._multimediaService.enabled$.next(true);
    }
}