import { Component, OnInit } from '@angular/core';
import { MultimediaService } from '@shared/services/multimedia.service';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {
    constructor(public _multimediaService: MultimediaService) { }
    ngOnInit(): void { }
}