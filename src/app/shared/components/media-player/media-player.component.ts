import { Component, OnInit, OnDestroy } from '@angular/core';
import { TrackModel } from '@core/models/tracks.models';
import { enableMediaPlayerService } from '@shared/services/enableMediaPlayer.service';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs'; //TODO: Programación reactiva

@Component({
    // TODO: selector -> se especifica como se llamará el componente dentro del html
    selector: 'app-media-player',
    // TODO: templateUrl -> se establece la url del template
    templateUrl: './media-player.component.html',
    // TODO: templateUrl -> se declara el array con las urls de los estilos
    styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit, OnDestroy {
    mockCover: TrackModel = {
        name: '',
        album: '',
        cover: '',
        url: '',
        _id: 0
    }

    observerList: Array<Subscription> = [];

    constructor(private _multimediaService: MultimediaService, private _enableMultimedia: enableMediaPlayerService) { }

    ngOnInit(): void {
        /**
         * subscribe(callback) ->  Se utiliza para suscribirse evento de un observable 
         * de tal manera que siempre se esté a la escucha del evento.
         * subscribe recibe como parametro un callback y nos retorna un objeto de tipo Subscription
         */
        const observer1$: Subscription = this._multimediaService.callback.subscribe(
            (track: TrackModel) => {
                console.log('recibiendo canción en el reproductor de multimedia', track)
                this.mockCover = track;
            }
        );

        this.observerList = [observer1$];
    }

    ngOnDestroy(): void {
        // se desuscribe de cada uno de los eventos a los que se suscribió el componente
        this.observerList.forEach(observer => observer.unsubscribe());
    }
}