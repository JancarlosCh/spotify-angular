import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable, of } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})

export class FavoriteTracksService {
    private readonly URL = environment.api;

    constructor(private _http: HttpClient) { }

    getFavoriteTracks(): Observable<any> {
        return this._http.get(`${this.URL}/tracks`)
            .pipe(
                map(({ data }: any) => {
                    return data;
                }),
                catchError(({ error, message }) => {
                    const errorMessage = {
                        error,
                        message
                    }
                    console.log(errorMessage)
                    // catch error devuelve un observable, por tanto, regresamos uno con .of([])
                    return of([])
                })
            )
    }
}