import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class SearchService {
    private readonly URL = environment.api;

    constructor(private _http: HttpClient) {}

    searchTrack(track: string): Observable<any> {
        return this._http.get(`${this.URL}/tracks?src=${track}`);
    }
}