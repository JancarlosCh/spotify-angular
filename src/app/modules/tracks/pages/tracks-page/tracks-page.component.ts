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
       const subscription1$ = this._tracksService.dataTracksTrending$.subscribe(
        (tracks) => {
               this.trendingTracks = tracks;
               this.randomTracks = tracks;
        }
       );

        const subscription2$ = this._tracksService.randomTracksData$.subscribe(
            (tracks) => {
                this.trendingTracks = [...this.randomTracks, ...tracks, ...tracks, ...tracks, ...tracks];
                this.randomTracks = [...this.randomTracks, ...tracks, ...tracks];
            }
        );

        this.subscriptionList = [subscription1$, subscription2$];
    }

    ngOnDestroy(): void {
        this.subscriptionList.forEach(trackSuscription => trackSuscription.unsubscribe)
    }
}