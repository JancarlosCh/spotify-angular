import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.models';
import { FavoriteTracksService } from '@modules/favorites/services/favorite-tracks.service';

@Component({
    selector: 'app-favorites-page',
    templateUrl: './favorites-page.component.html',
    styleUrls: ['./favorites-page.component.css']
})

export class FavoritesPageComponent implements OnInit {
    favoriteSongs!: TrackModel[];

    constructor(public _favoriteTracksService: FavoriteTracksService) { }

    ngOnInit(): void {
        this._favoriteTracksService.getFavoriteTracks()
        .subscribe(songs => {
            this.favoriteSongs = songs;
        })
    }
}