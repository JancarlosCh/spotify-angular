import { ArtistModel } from "./artist.models";

export interface TrackModel {
    name:string,
    album: string,
    cover: string,
    duration?: number,
    url: string,
    _id: string | number,
    artist?: ArtistModel
}