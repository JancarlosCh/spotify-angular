import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.models';
import { Observable, of } from 'rxjs';

import * as dataRaw from '@data/tracks.json'

@Injectable({
    providedIn: 'root'
})

export class TracksService {
    // of(datos) -> retorna un observable de los datos pasados como argumentos
    dataTracksTrending$: Observable<TrackModel[]> = of([]);
    randomTracksData$: Observable<TrackModel[]> = of([]);

    constructor() {
        const { data } = (dataRaw as any).default;

        this.dataTracksTrending$ = of(data);

        /**
         * new Observable((observer) => { } -> es otra forma de crear un
         * observable, la cual ofrece un método observer.next() para gestionar
         * los eventos
         */
        this.randomTracksData$ = new Observable((observer) => {

            const track = {
                name: 'testing observable',
                album: 'angular rxjs',
                cover: 'https://blog.consdata.tech/assets/img/posts/2020-01-09-rxjs-wstep/RxJS.png',
                url: 'https://blog.consdata.tech/assets/img/posts/2020-01-09-rxjs-wstep/RxJS.png',
                _id: 23,
            };

            setTimeout(() => {
                observer.next([track]);
            }, 3500);
        })
    }
}