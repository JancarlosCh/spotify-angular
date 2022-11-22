import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.models';
import { SearchService } from '@modules/history/services/search.service';
import { Observable, of } from 'rxjs';

@Component({
    selector: 'app-history-page',
    templateUrl: './history-page.component.html',
    styleUrls: ['./history-page.component.css']
})

export class HistoryPageComponent implements OnInit {
    // para que el pipe asycn funcione es necesario devolver un Observable
    trackList: Observable<any> = of([]);

    constructor(private searchService: SearchService) { }

    ngOnInit(): void { }

    receiveData(term: string): void {
        this.trackList = this.searchService.searchTrack(term);
    }
}