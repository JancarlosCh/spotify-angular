import { Injectable, EventEmitter } from '@angular/core';
import { TrackModel } from '@core/models/tracks.models';
import { BehaviorSubject, Observable, Observer, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class MultimediaService {
    /**
     * Para instanciar un emitidor de eventos se utiliza:
     * nombre: EventEmitter<tipo> = new EventEmitter<tipo>();
     * 
     * El EventEmitter se utiliza para emitir o escuchar eventos,
     * entre otros.
     */
    callback: EventEmitter<any> = new EventEmitter<any>();

    public enabled$: BehaviorSubject<any> = new BehaviorSubject(undefined);
    public trackInfo$: BehaviorSubject<any> = new BehaviorSubject(undefined);
    public timeElapsed$: BehaviorSubject<string> = new BehaviorSubject('00:00');
    public timeRemaining$: BehaviorSubject<string> = new BehaviorSubject('-00:00');
    public playerStatus$: BehaviorSubject<string> = new BehaviorSubject('paused');
    public playerPercentege$: BehaviorSubject<number> = new BehaviorSubject(0);
    public audio!: HTMLAudioElement;

    constructor() {
        this.audio = new Audio();
        this.trackInfo$.subscribe(
            (track) => (track) && this.setAudio(track)
        )
        this.listenEvents();
    }

    public setAudio(track: TrackModel): void {
        this.audio.src = track.url;
        this.audio.play();
    }

    private calculateTime = () => {
        const { duration, currentTime } = this.audio;
        this.setTimeElapsed(currentTime);
        this.setRemainingTime(duration, currentTime);
        this.setPercentege(duration, currentTime);
    }

    private setTimeElapsed(currentTime: number): void {
        let seconds = Math.floor(currentTime % 60);
        let minutes = Math.floor((currentTime / 60) % 60);

        const displaySeconds = seconds < 10 ? `0${seconds}` : seconds;
        const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;

        const displayFormat = `${displayMinutes}:${displaySeconds}`;

        this.timeElapsed$.next(displayFormat);
    }

    private setRemainingTime(duration: number, currentTime: number): void {
        const timeLeft = duration - currentTime;

        let seconds = Math.floor(timeLeft % 60);
        let minutes = Math.floor((timeLeft / 60) % 60);

        const displaySeconds = seconds < 10 ? `0${seconds}` : seconds;
        const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;

        const displayFormat = `-${displayMinutes}:${displaySeconds}`;

        this.timeRemaining$.next(displayFormat);
    }

    private listenEvents(): void {
        this.audio.addEventListener('timeupdate', this.calculateTime, false);
        this.audio.addEventListener('playing', this.setPlayerStatus, false);
        this.audio.addEventListener('play', this.setPlayerStatus, false);
        this.audio.addEventListener('pause', this.setPlayerStatus, false)
        this.audio.addEventListener('ended', this.setPlayerStatus, false)
    }

    public togglePlayer(): void {
        this.audio.paused ? this.audio.play() : this.audio.pause();
    }

    private setPlayerStatus = (state: any) => {
        console.log(state.type)
        switch (state.type) {
            case 'play':
                this.playerStatus$.next('play');
                break;
            case 'playing':
                this.playerStatus$.next('playing');
                break;
            case 'ended':
                this.playerStatus$.next('ended');
                break;
            default:
                this.playerStatus$.next('paused')
                break;
        }
    }

    private setPercentege(duration: number, currentTime: number): void {
        var percentage = (currentTime * 100) / duration;
        this.playerPercentege$.next(percentage);
    }

    public seekAudio(porcentage: number): void {
        const { duration } = this.audio;

        // se converte el porcentaje a segundos conr especto a la duración de la canción
        const porcentageToSeconds = (porcentage * duration) / 100;
        console.log(porcentageToSeconds);

        // se actualiza el currentTime
        this.audio.currentTime = porcentageToSeconds;
    }
}