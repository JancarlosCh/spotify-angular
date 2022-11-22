import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryRoutingModule } from './history-routing.module';
import { HistoryPageComponent } from './pages/history-page/history-page.component';
import { SharedModule } from '@shared/shared.module';
import { FormsModule } from '@angular/forms';
import { SearchBarComponent } from './components/search-bar/pages/search-bar.component';

@NgModule({
    declarations: [
        HistoryPageComponent,
        SearchBarComponent
    ],
    imports: [
        CommonModule,
        HistoryRoutingModule,
        SharedModule,
        FormsModule
    ]
})

export class HistoryModule { }