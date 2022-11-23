import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { TrackModel } from '@core/models/tracks.models';
import { enableMediaPlayerService } from '@shared/services/enableMediaPlayer.service';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs'; //TODO: Programación reactiva

@Component({
    selector: 'app-media-player',
    templateUrl: './media-player.component.html',
    styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit, OnDestroy {

    /**
     * @ViewChild('alias') variable: ElementRef = new ElementRef('')
     * -> ViewChild nos permite interactuar con el elemento hijo
     */
    @ViewChild('progressBar') progressBar: ElementRef = new ElementRef('');
    state: string = 'paused'
    mockCover!: TrackModel;
    observerList: Array<Subscription> = [];

    constructor(public _multimediaService: MultimediaService) { }

    ngOnInit(): void {
        const subscrition1$ = this._multimediaService.playerStatus$
            .subscribe(response => this.state = response);

        this.observerList = [subscrition1$];
    }

    ngOnDestroy(): void {
        // se desuscribe de cada uno de los eventos a los que se suscribió el componente
        this.observerList.forEach(observer => observer.unsubscribe());
    }

    handlePosition($event: MouseEvent): void {
        // se crea un elemento nativo
        const nativeElement: HTMLElement = this.progressBar.nativeElement;

        // se extrae la posición en X al momento del click
        const { clientX } = $event;

        // se extraen el ancho inicial del elemento: x y el ancho del elemento: width
        const { x, width } = nativeElement.getBoundingClientRect();
        console.log(`Click(x): ${clientX}, Width Initial: ${x}, Width: ${width}`);

        // se calcula la coordenada exacta del click en x con respecto al elemento
        const clickX = clientX - x;
        console.log(clickX)

        // se calcula el porcentaje de la posición exacta
        const percentageFromX = (clickX * 100) / width;
        console.log("Click(x)", percentageFromX)

        // pasar valor al servicio de multimedia
        this._multimediaService.seekAudio(percentageFromX);
    }
}