import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { FindMusicReducer } from './store/reducers/find-music.reducer';
import { EffectsModule } from '@ngrx/effects';
import { FindMusicEffects } from './store/effects/find-music.effects';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { ArtistModelAdapter } from './store/models/artist.model';
import { AlbumModelAdapter } from './store/models/album.model';
import { TrackModelAdapter } from './store/models/track.model';
import { MatTooltipModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot({ searchResult: FindMusicReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([FindMusicEffects]),
    FormsModule,
    MatTooltipModule,
  ],
  providers: [ArtistModelAdapter, AlbumModelAdapter, TrackModelAdapter],
  bootstrap: [AppComponent],
})
export class AppModule {}
