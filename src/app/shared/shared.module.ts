import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderUserComponent } from './components/header-user/header-user.component';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { CardPlayerComponent } from './components/card-player/card-player.component';
import { SectionGenericComponent } from './components/section-generic/section-generic.component';
import { PlayListHeaderComponent } from './components/play-list-header/play-list-header.component';
import { PlayListBodyComponent } from './components/play-list-body/play-list-body.component';
import { RouterModule } from '@angular/router';
import { SortListPipe } from './pipes/sort-list.pipe';
import { ImgBrokenDirective } from './components/directives/img-broken.directive';

// export -> aquí van los componentes que queremos compartir con otros módulos
@NgModule({
  declarations: [
    HeaderUserComponent,
    SideBarComponent,
    MediaPlayerComponent,
    SectionGenericComponent,
    CardPlayerComponent,
    PlayListHeaderComponent,
    PlayListBodyComponent,
    SortListPipe,
    ImgBrokenDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderUserComponent,
    SideBarComponent,
    MediaPlayerComponent,
    SectionGenericComponent,
    CardPlayerComponent,
    PlayListHeaderComponent,
    PlayListBodyComponent,
    SortListPipe,
    ImgBrokenDirective
  ]
})
export class SharedModule { }