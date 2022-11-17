import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.models';

@Component({
    // TODO: selector -> se especifica como se llamará el componente dentro del html
    selector: 'app-media-player',
    // TODO: templateUrl -> se establece la url del template
    templateUrl: './media-player.component.html',
    // TODO: templateUrl -> se declara el array con las urls de los estilos
    styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit {
    mockCover: TrackModel = {
        name: 'testing',
        album: 'testing',
        cover: 'testing',
        url: '',
        _id: 0
    }

    constructor() { }

    ngOnInit(): void { }
}