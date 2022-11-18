import { Component,Input, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.models';
import { MultimediaService } from '@shared/services/multimedia.service';

@Component({
    selector: 'app-card-player',
    templateUrl: './card-player.component.html',
    styleUrls: ['./card-player.component.css']
})

export class CardPlayerComponent implements OnInit {
    @Input() mode: "big" | "small" = 'small';
    @Input() track: TrackModel = {
        name: '',
        album: '',
        cover: '',
        url: '',
        _id: 0,
    };

    // Se inyecta el servicio multimedia en el constructor
    constructor(private _multimediaService: MultimediaService) { }

    ngOnInit(): void { }

    // Función encargada de enviar una canción a otro componente
    sendMultimedia(track: TrackModel): void {
        //.emit(any) -> se utiliza para emitir un evento
        console.log(track)
        this._multimediaService.callback.emit(track)
    }

//    enableMediaPlayer(): void {
//         this._enableMultimedia.callback.emit(true);
//     }

//     play(track: TrackModel): void {
//         this.enableMediaPlayer();
//         this.sendMultimedia(track);
//     }
}