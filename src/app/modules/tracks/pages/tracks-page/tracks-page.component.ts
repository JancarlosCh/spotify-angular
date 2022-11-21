import { Component, OnInit, OnDestroy } from '@angular/core';
import { TrackModel } from '@core/models/tracks.models';
import { TracksService } from '@modules/tracks/services/tracks.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-tracks-page',
    templateUrl: './tracks-page.component.html',
    styleUrls: ['./tracks-page.component.css']
})

export class TracksPageComponent implements OnInit, OnDestroy {
    trendingTracks: Array<TrackModel> = [];
    randomTracks: Array<TrackModel> = [];

    subscriptionList: Array<Subscription> = [];

    constructor(private _tracksService: TracksService) { }

    ngOnInit(): void {
        this.loadTrendingTracks();
        this.loadRandomTracks();
    }

    loadTrendingTracks(): void {
        this._tracksService.getTracks$()
            .subscribe(
                response => {
                    this.trendingTracks = response;
                }
            );
    }

    loadRandomTracks(): void {
        this._tracksService.getRandomTracks$()
            .subscribe(
                response => {
                    this.randomTracks = response;
                }
            );
    }

    ngOnDestroy(): void {
        //this.subscriptionList.forEach(trackSuscription => trackSuscription.unsubscribe)
    }
}