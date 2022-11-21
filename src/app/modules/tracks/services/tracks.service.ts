import { HttpClient } from '@angular/common/http';
import { Injectable, resolveForwardRef } from '@angular/core';
import { TrackModel } from '@core/models/tracks.models';
import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators'
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class TracksService {
    private readonly URL = environment.api;

    // private _httpClient: HttpClient -> permite realizar las peticiones
    constructor(private _httpClient: HttpClient) {
    }

    /**
     * Filtra un array de canciones de tal manera que retorna un array que excluye 
     * el elemento que tenga el id especificado por parametros
     * especificado como parametro
     * @param tracks 
     * @param id 
     * @returns Promise
     */
    private skipById(tracks: TrackModel[], id: number): Promise<any> {
        const temporalData = tracks.filter((track => track._id !== id))
        return new Promise((resolve, reject) => {
            resolve(temporalData)
        })
    }

    /**
     * Retorna las canciones desde el API
     * @returns Observable<any>
     */
    getTracks$(): Observable<any> {
        /**
         * A los observables se les puede aplicar pipes con tal de transformar datos
         * mediante la función ejemploObservable.pipe(), la cual recibe operadores 
         * que son los que facilitan la transformación de datos.
         */
        return this._httpClient.get(`${this.URL}/tracks`)
            .pipe(
                map(({ data }: any) => {
                    return data
                }),
                // catchError-> Este pipe permite capturar los errores en un Observable
                catchError(({ error, message }) => {
                    const errorMessage = {
                        error,
                        message
                    }
                    console.log(errorMessage)
                    // catch error devuelve un observable, por tanto, regresamos uno con .of([])
                    return of([])
                })
            );
    }

    getRandomTracks$(): Observable<any> {
        return this._httpClient.get(`${this.URL}/tracks`)
            .pipe(
                mergeMap(({ data }: any) => this.skipById(data, 1)),
                catchError(({ error, message }) => {
                    const errorMessage = {
                        error,
                        message
                    }
                    console.log(errorMessage)
                    return of([])
                })
            )
    }
}