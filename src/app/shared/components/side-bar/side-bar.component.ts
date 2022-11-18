import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TracksService } from '@modules/tracks/services/tracks.service';
import { MultimediaService } from '@shared/services/multimedia.service';

@Component({
    selector: 'app-slide-bar',
    templateUrl: './side-bar.component.html',
    styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
    // aquí se pueden declarar atributos
    mainMenu: {
        defaultOptions: Array<any>,
        accessLink: Array<any>
    } = { defaultOptions: [], accessLink: [] }

    customOptions: Array<any> = [];

    constructor(private _trackService: TracksService, private _mService: MultimediaService) { }

    /**
     * ngOnInit -> hace parte del ciclo de vida del componente y se ejecuta
     * justo después del constructor, en este apartado se suelen llamar servicios, 
     * llenar variables, etc
     */
    ngOnInit(): void {
        this.mainMenu.defaultOptions = [
            {
                name: 'Home',
                icon: 'uil-estate',
                router: '/'
            },
            {
                name: 'Buscar',
                icon: 'uil-search',
                router: 'history'
            },
            {
                name: 'Tu biblioteca',
                icon: 'uil-chart',
                router: 'favorites'
            }
        ];

        this.mainMenu.accessLink = [
            {
                name: 'Crear Lista',
                icon: 'uil-plus-square'
            },
            {
                name: 'Canciones que te gustan',
                icon: 'uil-heart-medical'
            }
        ];

        this.customOptions = [
            {
                name: 'Mi lista °1'
            },
            {
                name: 'Mi lista °2'
            },
            {
                name: 'Mi lista °3'
            },
            {
                name: 'Mi lista °4'
            }
        ]


        // this._mService.callback.subscribe(
        //     (track) => { 
        //         const trackName = track.name
        //         console.log("trackName: ", trackName)
        //         this.customOptions.push(
        //             {
        //                 name: trackName
        //             }
        //         )
        //     }
        // )

        // this._trackService.randomTracksData$.subscribe(u => {
        //     this.customOptions.push(
        //         { name: u[0].name }
        //     )
        // })

    }
}